import { Address } from "@graphprotocol/graph-ts";

import * as constants from "../Constants"
import { ICarbonToken } from "./ICarbonToken";
import { MCO2 } from "./impl/MCO2";

export class CarbonTokenFactory {
    constructor() {}

    public getTokenForAddress(address: Address): ICarbonToken {

        if (address.equals(Address.fromHexString(constants.MCO2_ERC20_CONTRACT))) {
            return new MCO2(address)
        }  

        throw new Error("[Carbon Factory] Failed to get Carbon Token for address: "+ address.toHexString());
    }
}