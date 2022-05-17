import { MossRetired, RetireMossCarbon } from "../generated/RetireMossCarbon/RetireMossCarbon"
import { RetireToucanCarbon, ToucanRetired } from "../generated/RetireToucanCarbon/RetireToucanCarbon"
import { C3Retired, RetireC3Carbon } from "../generated/RetireC3Carbon/RetireC3Carbon"
import { KlimaRetire, DailyRetirement } from "../generated/schema";
import * as constants from "../../lib/utils/Constants";

import { KlimaCarbonRetirements } from "../generated/RetireC3Carbon/KlimaCarbonRetirements"
import { loadOrCreateCarbonOffset } from "./utils/CarbonOffsets"
import { loadOrCreateDailyRetirement } from "./utils/DailyRetirement"
import { getTokenFromPoolAddress } from "./utils/Token"
import { toDecimal } from "../../lib/utils/Decimals"
import { dayFromTimestamp } from "../../lib/utils/Dates"
import { loadOrCreateTransaction } from "./utils/Transactions"
import { loadOrCreateKlimaRetire } from "./utils/KlimaRetire"
import { Address, BigDecimal, BigInt } from "@graphprotocol/graph-ts"

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

    const dailyRetirement = generateDailyRetirement(retire)
    dailyRetirement.save()
    // TODO: add separate handler for specific retirements
    // retire.specific = true

    retire.save()
}

export function handleToucanRetired(event: ToucanRetired): void {
    let transaction = loadOrCreateTransaction(event.transaction, event.block)
    let offset = loadOrCreateCarbonOffset(transaction, event.params.carbonToken, 'Toucan', 'Verra')
    let retire = loadOrCreateKlimaRetire(offset, transaction)
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
    retire.feeAmount = retire.amount.times(fee.div(BigDecimal.fromString("100")))

    const dailyRetirement = generateDailyRetirement(retire)
    dailyRetirement.save()
    // TODO: add separate handler for specific retirements
    // retire.specific = true

    retire.save()
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
    retire.feeAmount = retire.amount.times(fee.div(BigDecimal.fromString("100")))

    const dailyRetirement = generateDailyRetirement(retire)
    dailyRetirement.save()
    // TODO: add separate handler for specific retirements
    // retire.specific = true

    retire.save()
}

function generateDailyRetirement(klimaRetire: KlimaRetire): DailyRetirement {

    const dayTimestamp = dayFromTimestamp(klimaRetire.timestamp)
    const id = dayTimestamp + klimaRetire.token

    const dailyRetirement = loadOrCreateDailyRetirement(id)
    dailyRetirement.amount = dailyRetirement.amount.plus(klimaRetire.amount)
    dailyRetirement.feeAmount = dailyRetirement.feeAmount.plus(klimaRetire.feeAmount)
    dailyRetirement.offset = klimaRetire.offset
    dailyRetirement.pool = klimaRetire.pool
    dailyRetirement.token = klimaRetire.token
    dailyRetirement.timestamp = BigInt.fromString(dayTimestamp)

    return dailyRetirement
}
