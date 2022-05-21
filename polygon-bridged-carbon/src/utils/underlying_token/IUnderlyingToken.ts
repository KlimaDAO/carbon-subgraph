import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";
import { CarbonMetric } from "../../../generated/schema";

export interface IUnderlyingToken {
  getDecimals(): number
  returnUpdatedRetirementMetrics(carbonMetricsDTO: CarbonMetric, amount: BigInt): CarbonMetric
}
