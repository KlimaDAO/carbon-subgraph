import { Address, BigDecimal, BigInt } from "@graphprotocol/graph-ts";
import { ERC20 } from "../../../../generated/ToucanFactory/ERC20";
import { CarbonMetric } from "../../../../generated/schema";
import { ICarbonToken } from "../ICarbonToken";
import * as constants from "../../Constants"
import { toDecimal } from "../../../../../lib/utils/Decimals";

export class UBO implements ICarbonToken {

    private contractAddress: Address

    constructor(contractAddress: Address) {
        this.contractAddress = contractAddress
    }

    getDecimals(): number {
        return 18
    }

    returnUpdatedSupplyMetrics(carbonMetrics: CarbonMetric): CarbonMetric {
        const oldSupply = carbonMetrics.uboSupply
        const newSupplyRaw = ERC20.bind(this.contractAddress).totalSupply()
        const newSupply = toDecimal(newSupplyRaw, this.getDecimals())

        const deltaSupply = newSupply.minus(oldSupply)
        carbonMetrics.uboSupply = newSupply
        carbonMetrics.totalCarbonSupply = carbonMetrics.totalCarbonSupply.plus(deltaSupply)

        return carbonMetrics
    }

    returnUpdatedKlimaRetirementMetrics(carbonMetrics: CarbonMetric, amount: BigInt): CarbonMetric {
        const oldKlimaRetired = carbonMetrics.uboKlimaRetired
        const newKlimaRetired = carbonMetrics.uboKlimaRetired.plus(toDecimal(amount, this.getDecimals()))

        const delta = newKlimaRetired.minus(oldKlimaRetired)
        carbonMetrics.uboKlimaRetired = newKlimaRetired
        carbonMetrics.totalKlimaRetirements = carbonMetrics.totalKlimaRetirements.plus(delta)

        return carbonMetrics
    }

}
