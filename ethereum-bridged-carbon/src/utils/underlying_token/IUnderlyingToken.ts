import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";
import { CarbonMetric } from "../../../generated/schema";

export interface IUnderlyingToken {
  getDecimals(): number
  returnUpdatedRetirementMetrics(carbonMetrics: CarbonMetric, amount: BigInt): CarbonMetric
}
