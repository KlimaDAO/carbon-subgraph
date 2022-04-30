import { MossRetired } from "../generated/RetireMossCarbon/RetireMossCarbon"
import { ToucanRetired } from "../generated/RetireToucanCarbon/RetireToucanCarbon"
import { C3Retired } from "../generated/RetireC3Carbon/RetireC3Carbon"
import { KlimaCarbonRetirements } from "../generated/RetireC3Carbon/KlimaCarbonRetirements"
import { loadOrCreateCarbonOffset } from "./utils/CarbonOffsets"
import { toDecimal } from "../../lib/utils/Decimals"
import { loadOrCreateTransaction } from "./utils/Transactions"
import { loadOrCreateKlimaRetire } from "./utils/KlimaRetire"
import { Address, BigInt } from "@graphprotocol/graph-ts"

export function handleMossRetired(event: MossRetired): void {

    let transaction = loadOrCreateTransaction(event.transaction, event.block)
    let offset = loadOrCreateCarbonOffset(transaction, event.params.carbonPool, 'Moss', 'Verra')
    let retire = loadOrCreateKlimaRetire(offset, transaction)
    let klimaRetirements = KlimaCarbonRetirements.bind(Address.fromString('0xac298cd34559b9acfaedea8344a977eceff1c0fd'))

    retire.retiringAddress = event.params.retiringAddress.toHexString()
    retire.beneficiaryAddress = event.params.beneficiaryAddress.toHexString()
    retire.index = klimaRetirements.retirements(event.params.beneficiaryAddress).value0.minus(BigInt.fromI32(1))

    retire.beneficiary = event.params.beneficiaryString
    retire.retirementMessage = event.params.retirementMessage

    retire.pool = event.params.carbonPool.toHexString()
    retire.amount = toDecimal(event.params.retiredAmount)

    // TODO: add separate handler for specific retirements
    // retire.specific = true

    retire.save()
}

export function handleToucanRetired(event: ToucanRetired): void {
    let transaction = loadOrCreateTransaction(event.transaction, event.block)
    let offset = loadOrCreateCarbonOffset(transaction, event.params.carbonToken, 'Toucan', 'Verra')
    let retire = loadOrCreateKlimaRetire(offset, transaction)
    let klimaRetirements = KlimaCarbonRetirements.bind(Address.fromString('0xac298cd34559b9acfaedea8344a977eceff1c0fd'))

    retire.retiringAddress = event.params.retiringAddress.toHexString()
    retire.beneficiaryAddress = event.params.beneficiaryAddress.toHexString()
    retire.index = klimaRetirements.retirements(event.params.beneficiaryAddress).value0.minus(BigInt.fromI32(1))

    retire.beneficiary = event.params.beneficiaryString
    retire.retirementMessage = event.params.retirementMessage

    retire.pool = event.params.carbonPool.toHexString()
    retire.amount = toDecimal(event.params.retiredAmount)

    // TODO: add separate handler for specific retirements
    // retire.specific = true

    retire.save()
}

export function handleC3Retired(event: C3Retired): void {
    let transaction = loadOrCreateTransaction(event.transaction, event.block)
    let offset = loadOrCreateCarbonOffset(transaction, event.params.carbonToken, 'C3', 'Verra')
    let retire = loadOrCreateKlimaRetire(offset, transaction)
    let klimaRetirements = KlimaCarbonRetirements.bind(Address.fromString('0xac298cd34559b9acfaedea8344a977eceff1c0fd'))

    retire.retiringAddress = event.params.retiringAddress.toHexString()
    retire.beneficiaryAddress = event.params.beneficiaryAddress.toHexString()
    retire.index = klimaRetirements.retirements(event.params.beneficiaryAddress).value0.minus(BigInt.fromI32(1))

    retire.beneficiary = event.params.beneficiaryString
    retire.retirementMessage = event.params.retirementMessage

    retire.pool = event.params.carbonPool.toHexString()
    retire.amount = toDecimal(event.params.retiredAmount)

    // TODO: add separate handler for specific retirements
    // retire.specific = true

    retire.save()
}
