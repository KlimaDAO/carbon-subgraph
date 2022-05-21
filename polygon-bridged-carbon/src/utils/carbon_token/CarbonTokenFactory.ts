import { Address } from "@graphprotocol/graph-ts";

import * as constants from "../Constants"
import { ICarbonToken } from "./ICarbonToken";
import { BCT } from "./impl/BCT";
import { MCO2 } from "./impl/MCO2";
import { NBO } from "./impl/NBO";
import { NCT } from "./impl/NCT";
import { UBO } from "./impl/UBO";

export class CarbonTokenFactory {
    constructor() {}

    public getTokenForAddress(address: Address): ICarbonToken {

        if (address.equals(Address.fromHexString(constants.BCT_ERC20_CONTRACT))) {
            return new BCT(address)
        } 
        if (address.equals(Address.fromHexString(constants.NCT_ERC20_CONTRACT))) {
            return new NCT(address)
        } 
        if (address.equals(Address.fromHexString(constants.MCO2_ERC20_CONTRACT))) {
            return new MCO2(address)
        }  
        if (address.equals(Address.fromHexString(constants.UBO_ERC20_CONTRACT))) {
            return new UBO(address)
        }
        if (address.equals(Address.fromHexString(constants.NBO_ERC20_CONTRACT))) {
            return new NBO(address)
        }

        throw new Error("[Carbon Factory] Failed to get Carbon Token for address: "+ address.toHexString());
    }
}