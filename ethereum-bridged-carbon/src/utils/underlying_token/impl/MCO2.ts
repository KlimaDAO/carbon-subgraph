import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";
import { toDecimal } from "../../../../../lib/utils/Decimals";
import { CarbonMetric } from "../../../../generated/schema";
import { IUnderlyingToken } from "../IUnderlyingToken";

export class MCO2 implements IUnderlyingToken {

    getDecimals(): number {
        return 18
    }

    returnUpdatedRetirementMetrics(carbonMetrics: CarbonMetric, amount: BigInt): CarbonMetric {
        carbonMetrics.mco2Retired = carbonMetrics.mco2Retired.plus(toDecimal(amount, this.getDecimals()))
        carbonMetrics.totalRetirements = carbonMetrics.totalRetirements.plus(toDecimal(amount, this.getDecimals()))

        return carbonMetrics
    }
}
