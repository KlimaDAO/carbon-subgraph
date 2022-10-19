import { BridgeRequestReceived, BridgeRequestSent } from "../generated/BaseCarbonTonne/ToucanCrossChainMessenger"
import { ERC20, Transfer } from "../generated/BaseCarbonTonne/ERC20"
import { loadOrCreateCarbonOffset } from "./utils/CarbonOffsets"
import { toDecimal } from "../../lib/utils/Decimals"
import { loadOrCreateTransaction } from "./utils/Transactions"
import { CarbonMetricUtils } from "./utils/CarbonMetrics"
import { loadOrCreateBridge } from "./utils/Bridge"
import { Address, log } from "@graphprotocol/graph-ts"
import { PoolTokenFactory } from "./utils/pool_token/PoolTokenFactory"


export function handleBridgeRequestReceived(event: BridgeRequestReceived): void {

    const poolToken = new PoolTokenFactory().getTokenForAddress(event.params.token)
    let transaction = loadOrCreateTransaction(event.transaction, event.block)

    let carbonOffset = loadOrCreateCarbonOffset(transaction, event.params.token, 'Toucan', 'Verra')
    let bridge = loadOrCreateBridge(carbonOffset, transaction)
    bridge.value = toDecimal(event.params.amount, 18)
    bridge.bridger = event.params.bridger.toHexString()
    bridge.direction = 'Received'
    bridge.save()

    carbonOffset.totalBridged = carbonOffset.totalBridged.plus(toDecimal(event.params.amount, 18))

    carbonOffset.currentSupply = toDecimal(poolToken.getTotalSupply(), 18)
    carbonOffset.lastUpdate = transaction.timestamp

    carbonOffset.save()
    CarbonMetricUtils.updatePoolTokenSupply(poolToken, event.block.timestamp)
}

export function handleBridgeRequestSent(event: BridgeRequestSent): void {

    const poolToken = new PoolTokenFactory().getTokenForAddress(event.params.token)
    let transaction = loadOrCreateTransaction(event.transaction, event.block)

    let carbonOffset = loadOrCreateCarbonOffset(transaction, event.params.token, 'Toucan', 'Verra')
    let bridge = loadOrCreateBridge(carbonOffset, transaction)
    bridge.value = toDecimal(event.params.amount, 18)
    bridge.bridger = event.params.bridger.toHexString()
    bridge.direction = 'Sent'
    bridge.save()

    carbonOffset.totalBridged = carbonOffset.totalBridged.minus(toDecimal(event.params.amount, 18))

    carbonOffset.currentSupply = toDecimal(poolToken.getTotalSupply(), 18)
    carbonOffset.lastUpdate = transaction.timestamp

    carbonOffset.save()
    CarbonMetricUtils.updatePoolTokenSupply(poolToken, event.block.timestamp)
}
