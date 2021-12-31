import { Address, BigDecimal, BigInt } from "@graphprotocol/graph-ts"
import { CarbonOffset, Transaction } from '../../generated/schema'
import { ToucanCarbonOffsets } from "../../generated/templates/ToucanCarbonOffsets/ToucanCarbonOffsets"


export function loadOrCreateCarbonOffset(transaction: Transaction, token: Address, bridge: String, registry: String): CarbonOffset {

    let id = token.toHex()

    let carbonOffset = CarbonOffset.load(id)
    if (carbonOffset == null) {

        if (bridge == 'Toucan') {
            carbonOffset = createToucanCarbonOffset(transaction, token, bridge, registry)
        }
        else {
            carbonOffset = new CarbonOffset(id)
            carbonOffset.tokenAddress = token.toHex()
            carbonOffset.bridge = bridge.toString()
            carbonOffset.registry = registry.toString()
            carbonOffset.totalBridged = BigDecimal.fromString('0')
            carbonOffset.totalRetired = BigDecimal.fromString('0')
            carbonOffset.currentSupply = BigDecimal.fromString('0')
            carbonOffset.vintage = ''
            carbonOffset.projectID = ''
            carbonOffset.standard = ''
            carbonOffset.methodology = ''
            carbonOffset.region = ''
            carbonOffset.storageMethod = ''
            carbonOffset.method = ''
            carbonOffset.emissionType = ''
            carbonOffset.category = ''
            carbonOffset.isCorsiaCompliant = false
            carbonOffset.coBenefits = ''
            carbonOffset.correspAdjustment = ''
            carbonOffset.additionalCertification = ''
            carbonOffset.klimaRanking = BigInt.fromString('0')
            carbonOffset.lastUpdate = transaction.timestamp
        }
    }

    return carbonOffset as CarbonOffset

}

// Create and set the attribute information for a TCO2 Token
export function createToucanCarbonOffset(transaction: Transaction, token: Address, bridge: String, registry: String): CarbonOffset {
    let id = token.toHex()

    let carbonOffsetERC20 = ToucanCarbonOffsets.bind(token)

    let carbonOffset = new CarbonOffset(id)

    let attributes = carbonOffsetERC20.getAttributes()

    carbonOffset.tokenAddress = token.toHex()
    carbonOffset.bridge = bridge.toString()
    carbonOffset.registry = registry.toString()
    carbonOffset.totalBridged = BigDecimal.fromString('0')
    carbonOffset.totalRetired = BigDecimal.fromString('0')
    carbonOffset.currentSupply = BigDecimal.fromString('0')
    carbonOffset.vintage = attributes.value1.startTime.toString()
    carbonOffset.projectID = attributes.value0.projectId
    carbonOffset.standard = attributes.value0.standard
    carbonOffset.methodology = attributes.value0.methodology
    carbonOffset.region = attributes.value0.region
    carbonOffset.storageMethod = attributes.value0.storageMethod
    carbonOffset.method = attributes.value0.method
    carbonOffset.emissionType = attributes.value0.emissionType
    carbonOffset.category = attributes.value0.category
    carbonOffset.isCorsiaCompliant = attributes.value1.isCorsiaCompliant
    carbonOffset.coBenefits = attributes.value1.coBenefits
    carbonOffset.correspAdjustment = attributes.value1.correspAdjustment
    carbonOffset.additionalCertification = attributes.value1.additionalCertification
    carbonOffset.klimaRanking = BigInt.fromString(carbonOffset.vintage + carbonOffset.projectID.substring(4).padStart(6, '0'))
    carbonOffset.lastUpdate = transaction.timestamp

    // Exclude the HFC methodology from jumping to the front of the list.
    if (token.toString() == '0x92BFcddaC83f2e94f02fc7aA092EB6AEc08A0DEC') {
        carbonOffset.klimaRanking = BigInt.fromString('253370786400' + carbonOffset.projectID.substring(4).padStart(6, '0'))
    }

    return carbonOffset as CarbonOffset
}
