import { MossRetired, RetireMossCarbon } from "../generated/RetireMossCarbon/RetireMossCarbon"
import { RetireToucanCarbon, ToucanRetired } from "../generated/RetireToucanCarbon/RetireToucanCarbon"
import { C3Retired, RetireC3Carbon } from "../generated/RetireC3Carbon/RetireC3Carbon"
import { KlimaRetire, DailyKlimaRetirement, ToucanCertificate } from "../generated/schema";
import * as constants from "../../lib/utils/Constants";

import { KlimaCarbonRetirements } from "../generated/RetireC3Carbon/KlimaCarbonRetirements"
import { loadOrCreateCarbonOffset } from "./utils/CarbonOffsets"
import { loadOrCreateDailyKlimaRetirement as loadOrCreateDailyKlimaRetirement } from "./utils/DailyKlimaRetirement"
import { getTokenFromPoolAddress } from "./utils/Token"
import { toDecimal } from "../../lib/utils/Decimals"
import { dayFromTimestamp } from "../../lib/utils/Dates"
import { loadOrCreateTransaction } from "./utils/Transactions"
import { loadOrCreateKlimaRetire } from "./utils/KlimaRetire"
import { Address, BigDecimal, BigInt } from "@graphprotocol/graph-ts"
import { CarbonMetricUtils } from "./utils/CarbonMetrics"
import { MCO2 } from "./utils/pool_token/impl/MCO2"
import { PoolTokenFactory } from "./utils/pool_token/PoolTokenFactory"
import { loadToucanCertificate } from "./utils/ToucanCertificate";

export function handleMossRetired(event: MossRetired): void {

    let transaction = loadOrCreateTransaction(event.transaction, event.block)
    let offset = loadOrCreateCarbonOffset(transaction, event.params.carbonPool, 'Moss', 'Verra')
    let retire = loadOrCreateKlimaRetire(offset, transaction)
    let klimaRetirements = KlimaCarbonRetirements.bind(Address.fromString(constants.KLIMA_CARBON_RETIREMENTS_CONTRACT))

    const token = getTokenFromPoolAddress(event.params.carbonPool)
    const fee = RetireMossCarbon.bind(event.address).feeAmount().toBigDecimal()

    retire.retiringAddress = event.params.retiringAddress.toHexString()
    retire.beneficiaryAddress = event.params.beneficiaryAddress.toHexString()
    retire.index = klimaRetirements.retirements(event.params.beneficiaryAddress).value0.minus(BigInt.fromI32(1))

    retire.beneficiary = event.params.beneficiaryString
    retire.retirementMessage = event.params.retirementMessage

    retire.pool = event.params.carbonPool.toHexString()
    retire.token = token
    retire.amount = toDecimal(event.params.retiredAmount)
    retire.feeAmount = retire.amount.times(fee.div(BigDecimal.fromString("1000")))

    const dailyRetirement = generateDailyKlimaRetirement(retire)
    dailyRetirement.save()
    // TODO: add separate handler for specific retirements
    // retire.specific = true

    retire.save()

    updateKlimaRetirementProtocolMetrics(retire.pool, event.block.timestamp, event.params.retiredAmount)
}

export function handleToucanRetired(event: ToucanRetired): void {
    let transaction = loadOrCreateTransaction(event.transaction, event.block)
    let offset = loadOrCreateCarbonOffset(transaction, event.params.carbonToken, 'Toucan', 'Verra')
    let retire = loadOrCreateKlimaRetire(offset, transaction)
    const toucanCertificate = loadToucanCertificate(transaction)
    let klimaRetirements = KlimaCarbonRetirements.bind(Address.fromString(constants.KLIMA_CARBON_RETIREMENTS_CONTRACT))

    const token = getTokenFromPoolAddress(event.params.carbonPool)
    const fee = RetireToucanCarbon.bind(event.address).feeAmount().toBigDecimal()

    retire.retiringAddress = event.params.retiringAddress.toHexString()
    retire.beneficiaryAddress = event.params.beneficiaryAddress.toHexString()
    retire.index = klimaRetirements.retirements(event.params.beneficiaryAddress).value0.minus(BigInt.fromI32(1))

    retire.beneficiary = event.params.beneficiaryString
    retire.retirementMessage = event.params.retirementMessage

    retire.pool = event.params.carbonPool.toHexString()
    retire.token = token
    retire.amount = toDecimal(event.params.retiredAmount)
    retire.feeAmount = retire.amount.times(fee.div(BigDecimal.fromString("1000")))

    const dailyRetirement = generateDailyKlimaRetirement(retire)
    dailyRetirement.save()
    // TODO: add separate handler for specific retirements
    // retire.specific = true

    //If ToucanRetired event happens after the NFT Transfer event which creates ToucanCertificate entity
    if (toucanCertificate != null) {
        retire.toucanCertificateTokenID = toucanCertificate.tokenID
        toucanCertificate.klimaRetire = retire.id

        toucanCertificate.save()
    }

    retire.save()

    updateKlimaRetirementProtocolMetrics(retire.pool, event.block.timestamp, event.params.retiredAmount)
}

export function handleC3Retired(event: C3Retired): void {
    let transaction = loadOrCreateTransaction(event.transaction, event.block)
    let offset = loadOrCreateCarbonOffset(transaction, event.params.carbonToken, 'C3', 'Verra')
    let retire = loadOrCreateKlimaRetire(offset, transaction)
    let klimaRetirements = KlimaCarbonRetirements.bind(Address.fromString(constants.KLIMA_CARBON_RETIREMENTS_CONTRACT))

    const token = getTokenFromPoolAddress(event.params.carbonPool)
    const fee = RetireC3Carbon.bind(event.address).feeAmount().toBigDecimal()

    retire.retiringAddress = event.params.retiringAddress.toHexString()
    retire.beneficiaryAddress = event.params.beneficiaryAddress.toHexString()
    retire.index = klimaRetirements.retirements(event.params.beneficiaryAddress).value0.minus(BigInt.fromI32(1))

    retire.beneficiary = event.params.beneficiaryString
    retire.retirementMessage = event.params.retirementMessage

    retire.pool = event.params.carbonPool.toHexString()
    retire.token = token
    retire.amount = toDecimal(event.params.retiredAmount)
    retire.feeAmount = retire.amount.times(fee.div(BigDecimal.fromString("1000")))

    const dailyKlimaRetirement = generateDailyKlimaRetirement(retire)
    dailyKlimaRetirement.save()
    // TODO: add separate handler for specific retirements
    // retire.specific = true

    updateKlimaRetirementProtocolMetrics(retire.pool, event.block.timestamp, event.params.retiredAmount)

    retire.save()
}

function generateDailyKlimaRetirement(klimaRetire: KlimaRetire): DailyKlimaRetirement {

    const dayTimestamp = dayFromTimestamp(klimaRetire.timestamp)
    const id = dayTimestamp + klimaRetire.token

    const dailyKlimaRetirement = loadOrCreateDailyKlimaRetirement(id)
    dailyKlimaRetirement.amount = dailyKlimaRetirement.amount.plus(klimaRetire.amount)
    dailyKlimaRetirement.feeAmount = dailyKlimaRetirement.feeAmount.plus(klimaRetire.feeAmount)
    dailyKlimaRetirement.offset = klimaRetire.offset
    dailyKlimaRetirement.pool = klimaRetire.pool
    dailyKlimaRetirement.token = klimaRetire.token
    dailyKlimaRetirement.timestamp = BigInt.fromString(dayTimestamp)

    return dailyKlimaRetirement
}
function updateKlimaRetirementProtocolMetrics(pool: string, timestamp: BigInt, retiredAmount: BigInt): void {
    const token = new PoolTokenFactory().getTokenForAddress(Address.fromString(pool))
    CarbonMetricUtils.updateKlimaRetirements(token, timestamp, retiredAmount)
}
