import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";
import { toDecimal } from "../../../../../lib/utils/Decimals";
import { CarbonMetric } from "../../../../generated/schema";
import { IUnderlyingToken } from "../IUnderlyingToken";

export class C3T implements IUnderlyingToken {

    getDecimals(): number {
        return 18
    }

    returnUpdatedRetirementMetrics(carbonMetricsDTO: CarbonMetric, amount: BigInt): CarbonMetric {
        carbonMetricsDTO.c3tRetired = carbonMetricsDTO.c3tRetired.plus(toDecimal(amount, this.getDecimals()))
        carbonMetricsDTO.totalRetirements = carbonMetricsDTO.totalRetirements.plus(toDecimal(amount, this.getDecimals()))

        return carbonMetricsDTO
    }
}
