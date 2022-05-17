import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";
import { DailyRetirement } from "../../generated/schema";


export function loadOrCreateDailyRetirement(id: string): DailyRetirement {

    let retire = DailyRetirement.load(id)
    if (retire == null) {
        retire = new DailyRetirement(id)
        retire.timestamp = BigInt.zero()
        retire.pool = ""
        retire.offset = ""
        retire.amount = BigDecimal.fromString('0')
        retire.feeAmount = BigDecimal.fromString("0")
    }

    return retire as DailyRetirement
}
