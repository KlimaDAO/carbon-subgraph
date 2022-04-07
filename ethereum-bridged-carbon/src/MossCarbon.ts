import { Address } from '@graphprotocol/graph-ts'

import { ERC20, Transfer } from '../generated/MossCarbon/ERC20'

import { toDecimal } from '../../lib/utils/Decimals'
import { loadOrCreateCarbonOffset } from './utils/CarbonOffsets'
import { loadOrCreateTransaction } from './utils/Transactions'
import { loadOrCreateBridge } from './utils/Bridge'
import { loadOrCreateRetire } from './utils/Retire'

export function handleTransfer(event: Transfer): void {

    let transaction = loadOrCreateTransaction(event.transaction, event.block)
    let offsetERC20 = ERC20.bind(event.address)

    let carbonOffset = loadOrCreateCarbonOffset(transaction, event.address, 'Moss', 'Verra')


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

        let retire = loadOrCreateRetire(carbonOffset, transaction)
        retire.value = toDecimal(event.params.value, 18)
        retire.retiree = event.params.from.toHexString()

        retire.save()

        carbonOffset.totalRetired = carbonOffset.totalRetired.plus(toDecimal(event.params.value, 18))
        //carbonOffset.retirements.push(retire.id)
    }

    carbonOffset.currentSupply = toDecimal(offsetERC20.totalSupply(), 18)
    carbonOffset.lastUpdate = transaction.timestamp

    carbonOffset.save()
}
