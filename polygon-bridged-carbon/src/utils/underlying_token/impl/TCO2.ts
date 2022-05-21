import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";
import { toDecimal } from "../../../../../lib/utils/Decimals";
import { CarbonMetric } from "../../../../generated/schema";
import { IUnderlyingToken } from "../IUnderlyingToken";

export class TCO2 implements IUnderlyingToken {

    getDecimals(): number {
        return 18
    }

    returnUpdatedRetirementMetrics(carbonMetricsDTO: CarbonMetric, amount: BigInt): CarbonMetric {
        carbonMetricsDTO.tco2Retired = carbonMetricsDTO.tco2Retired.plus(toDecimal(amount, this.getDecimals()))
        carbonMetricsDTO.totalRetirements = carbonMetricsDTO.totalRetirements.plus(toDecimal(amount, this.getDecimals()))

        return carbonMetricsDTO
    }
}
