import { Address } from '@graphprotocol/graph-ts'

import { Transfer, ToucanCarbonOffsets } from '../generated/templates/ToucanCarbonOffsets/ToucanCarbonOffsets'

import { toDecimal } from './utils/Decimals'
import { loadOrCreateCarbonOffset } from './utils/CarbonOffsets'
import { loadOrCreateTransaction } from './utils/Transactions'
import { loadOrCreateBridge } from './utils/Bridge'
import { Bridge } from '../generated/schema'
import { loadOrCreateRetire } from './utils/Retire'

export function handleTransfer(event: Transfer): void {

    let transaction = loadOrCreateTransaction(event.transaction, event.block)
    let offsetERC20 = ToucanCarbonOffsets.bind(event.address)

    let carbonOffset = loadOrCreateCarbonOffset(transaction, event.address, 'Toucan', 'Verra')


    // Handle Fractionalizing (Mints from briding)
    if (event.params.from == Address.fromString('0x0000000000000000000000000000000000000000')) {

        let bridge = loadOrCreateBridge(carbonOffset, transaction)
        bridge.value = toDecimal(event.params.value, 18)
        bridge.bridger = event.params.to.toHex()

        bridge.save()

        carbonOffset.totalBridged = carbonOffset.totalBridged.plus(toDecimal(event.params.value, 18))

        //carbonOffset.bridges.push(bridge.id)
    }

    // Handle Retirements
    if (event.params.to == Address.fromString('0x0000000000000000000000000000000000000000')) {

        let retire = loadOrCreateRetire(carbonOffset, transaction)
        retire.value = toDecimal(event.params.value, 18)
        retire.retiree = event.params.from.toHex()

        retire.save()

        carbonOffset.totalRetired = carbonOffset.totalRetired.plus(toDecimal(event.params.value, 18))
        //carbonOffset.retirements.push(retire.id)
    }

    carbonOffset.currentSupply = toDecimal(offsetERC20.totalSupply(), 18)
    carbonOffset.lastUpdate = transaction.timestamp

    carbonOffset.save()
}
