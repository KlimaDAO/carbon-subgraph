import { Address } from '@graphprotocol/graph-ts'

import { Transfer, ToucanCarbonOffsets } from '../generated/templates/ToucanCarbonOffsets/ToucanCarbonOffsets'

import { toDecimal } from '../../lib/utils/Decimals'
import { loadOrCreateCarbonOffset } from './utils/CarbonOffsets'
import { loadOrCreateTransaction } from './utils/Transactions'
import { loadOrCreateBridge } from './utils/Bridge'
import { Bridge } from '../generated/schema'
import { loadOrCreateRetire } from './utils/Retire'
import { TCO2 } from './utils/carbon_token/impl/TCO2'
import { CarbonMetricUtils } from './utils/CarbonMetrics'

export function handleTransfer(event: Transfer): void {

    let transaction = loadOrCreateTransaction(event.transaction, event.block)
    let offsetERC20 = ToucanCarbonOffsets.bind(event.address)

    let carbonOffset = loadOrCreateCarbonOffset(transaction, event.address, 'Toucan', 'Verra')


    // Handle Fractionalizing (Mints from briding)
    if (event.params.from == Address.fromString('0x0000000000000000000000000000000000000000')) {

        let bridge = loadOrCreateBridge(carbonOffset, transaction)
        bridge.value = toDecimal(event.params.value, 18)
        bridge.bridger = event.params.to.toHexString()

        bridge.save()

        carbonOffset.totalBridged = carbonOffset.totalBridged.plus(toDecimal(event.params.value, 18))

        //carbonOffset.bridges.push(bridge.id)
    }

    // Handle Retirements
    if (event.params.to == Address.fromString('0x0000000000000000000000000000000000000000')) {

        // This is a temporary solution - we are not tracking retirements related to HFC-23 Credits
        // What needs to be done is to track Retire events instead of Transfer
        if (carbonOffset.methodology != "AM0001") {

        let retire = loadOrCreateRetire(carbonOffset, transaction)
        retire.value = toDecimal(event.params.value, 18)
        retire.retiree = event.params.from.toHexString()

        retire.save()

        carbonOffset.totalRetired = carbonOffset.totalRetired.plus(toDecimal(event.params.value, 18))
            CarbonMetricUtils.updateCarbonTokenRetirements(new TCO2(), event.block.timestamp, event.params.value)
        }
    }

    carbonOffset.currentSupply = toDecimal(offsetERC20.totalSupply(), 18)
    carbonOffset.lastUpdate = transaction.timestamp

    carbonOffset.save()

}
