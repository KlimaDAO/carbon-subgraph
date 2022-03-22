import { Deposited, Redeemed } from "../generated/NBO/NBO"
import { loadOrCreateCarbonOffset } from "./utils/CarbonOffsets"
import { toDecimal } from "./utils/Decimals"
import { loadOrCreateTransaction } from "./utils/Transactions"
import { loadOrCreateDeposit } from "./utils/Deposit"
import { loadOrCreateRedeem } from "./utils/Redeem"

export function handleDeposit(event: Deposited): void {

    let transaction = loadOrCreateTransaction(event.transaction, event.block)
    let offset = loadOrCreateCarbonOffset(transaction, event.params.tokenERC2OAddress, 'C3', '')
    let deposit = loadOrCreateDeposit(offset, transaction)

    deposit.depositor = transaction.from.toHexString()
    deposit.pool = ''
    deposit.value = toDecimal(event.params.amount)

    offset.balanceNBO = offset.balanceNBO.plus(toDecimal(event.params.amount, 18))

    offset.save()
    deposit.save()
}

export function handleRedeem(event: Redeemed): void {
    let transaction = loadOrCreateTransaction(event.transaction, event.block)
    let offset = loadOrCreateCarbonOffset(transaction, event.params.tokenERC2OAddress, 'C3', '')
    let redeem = loadOrCreateRedeem(offset, transaction)

    redeem.redeemer = transaction.from.toHexString()
    redeem.pool = ''
    redeem.value = toDecimal(event.params.amount)

    offset.balanceNBO = offset.balanceNBO.minus(toDecimal(event.params.amount, 18))

    offset.save()
    redeem.save()
}
