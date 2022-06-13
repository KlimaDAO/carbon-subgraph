import { Address, BigDecimal, BigInt } from "@graphprotocol/graph-ts";
import { ERC20 } from "../../../../generated/ToucanFactory/ERC20";
import { CarbonMetric } from "../../../../generated/schema";
import { IPoolToken } from "../IPoolToken";
import * as constants from "../../Constants"
import { toDecimal } from "../../../../../lib/utils/Decimals";

export class NCT implements IPoolToken {

    private contractAddress: Address

    constructor(contractAddress: Address) {
        this.contractAddress = contractAddress
    }

    getDecimals(): number {
        return 18
    }

    returnUpdatedSupplyMetrics(carbonMetrics: CarbonMetric): CarbonMetric {
        const oldSupply = carbonMetrics.nctSupply
        const newSupplyRaw = ERC20.bind(this.contractAddress).totalSupply()
        const newSupply = toDecimal(newSupplyRaw, this.getDecimals())

        const deltaSupply = newSupply.minus(oldSupply)
        carbonMetrics.nctSupply = newSupply
        carbonMetrics.totalCarbonSupply = carbonMetrics.totalCarbonSupply.plus(deltaSupply)

        return carbonMetrics
    }

    returnUpdatedKlimaRetirementMetrics(carbonMetrics: CarbonMetric, amount: BigInt): CarbonMetric {
        const oldKlimaRetired = carbonMetrics.nctKlimaRetired
        const newKlimaRetired = carbonMetrics.nctKlimaRetired.plus(toDecimal(amount, this.getDecimals()))

        const delta = newKlimaRetired.minus(oldKlimaRetired)
        carbonMetrics.nctKlimaRetired = newKlimaRetired
        carbonMetrics.totalKlimaRetirements = carbonMetrics.totalKlimaRetirements.plus(delta)

        return carbonMetrics
    }

}
