import { BigInt, log } from "@graphprotocol/graph-ts";

export function stdYearFromTimestamp(timestamp: BigInt): string {
    let year_ts = timestamp.toI32() - (timestamp.toI32() % 31556926)
    return ((year_ts / 31556926) + 1970).toString()
}

export function dayFromTimestamp(timestamp: BigInt): string {
    let day_ts = timestamp.toI32() - (timestamp.toI32() % 86400)
    return day_ts.toString()
}

export function hourFromTimestamp(timestamp: BigInt): string {
    let day_ts = timestamp.toI32() - (timestamp.toI32() % 3600)
    return day_ts.toString()
}
