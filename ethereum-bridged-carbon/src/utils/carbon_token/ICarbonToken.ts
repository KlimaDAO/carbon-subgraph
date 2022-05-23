import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";
import { CarbonMetric } from "../../../generated/schema";

export interface ICarbonToken {
  getDecimals(): number
  returnUpdatedSupplyMetrics(carbonMetrics: CarbonMetric): CarbonMetric
  returnUpdatedKlimaRetirementMetrics(carbonMetrics: CarbonMetric, amount: BigInt): CarbonMetric
}
