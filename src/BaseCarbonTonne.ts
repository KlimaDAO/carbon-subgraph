import { Deposited, Redeemed } from "../generated/BaseCarbonTonne/BaseCarbonTonne"
import { loadOrCreateCarbonOffset } from "./utils/CarbonOffsets"
import { toDecimal } from "./utils/Decimals"
import { loadOrCreateTransaction } from "./utils/Transactions"

export function handleDeposit(event: Deposited): void {

    let transaction = loadOrCreateTransaction(event.transaction, event.block)
    let offset = loadOrCreateCarbonOffset(transaction, event.params.erc20Addr, 'Toucan', 'Verra')

    offset.balanceBCT = offset.balanceBCT.plus(toDecimal(event.params.amount, 18))

    offset.save()
}

export function handleRedeem(event: Redeemed): void {
    let transaction = loadOrCreateTransaction(event.transaction, event.block)
    let offset = loadOrCreateCarbonOffset(transaction, event.params.erc20, 'Toucan', 'Verra')

    offset.balanceBCT = offset.balanceBCT.minus(toDecimal(event.params.amount, 18))

    offset.save()
}
