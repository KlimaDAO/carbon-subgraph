import { MossRetired } from "../generated/RetireMossCarbon/RetireMossCarbon"
import { ToucanRetired } from "../generated/RetireToucanCarbon/RetireToucanCarbon"
import { loadOrCreateCarbonOffset } from "./utils/CarbonOffsets"
import { toDecimal } from "./utils/Decimals"
import { loadOrCreateTransaction } from "./utils/Transactions"
import { loadOrCreateKlimaRetire } from "./utils/KlimaRetire"

export function handleMossRetired(event: MossRetired): void {

    let transaction = loadOrCreateTransaction(event.transaction, event.block)
    let offset = loadOrCreateCarbonOffset(transaction, event.params.carbonPool, 'Moss', 'Verra')
    let retire = loadOrCreateKlimaRetire(offset, transaction)

    retire.retiringAddress = event.params.retiringAddress.toHexString()
    retire.beneficiaryAddress = event.params.beneficiaryAddress.toHexString()

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

    retire.retiringAddress = event.params.retiringAddress.toHexString()
    retire.beneficiaryAddress = event.params.beneficiaryAddress.toHexString()

    retire.beneficiary = event.params.beneficiaryString
    retire.retirementMessage = event.params.retirementMessage

    retire.pool = event.params.carbonPool.toHexString()
    retire.amount = toDecimal(event.params.retiredAmount)

    // TODO: add separate handler for specific retirements
    // retire.specific = true

    retire.save()
}
