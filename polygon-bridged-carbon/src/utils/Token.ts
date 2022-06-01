import { Address } from "@graphprotocol/graph-ts";
import * as constants from "../../../lib/utils/Constants";

export function getTokenFromPoolAddress(address: Address): string {
    if (address.equals(Address.fromHexString(constants.BCT_ERC20_CONTRACT))) {
        return constants.BCT_TOKEN
    }
    if (address.equals(Address.fromHexString(constants.NCT_ERC20_CONTRACT))) {
        return constants.NCT_TOKEN
    }
    if (address.equals(Address.fromHexString(constants.MCO2_ERC20_CONTRACT))) {
        return constants.MCO2_TOKEN
    }
    if (address.equals(Address.fromHexString(constants.UBO_ERC20_CONTRACT))) {
        return constants.UBO_TOKEN
    }
    if (address.equals(Address.fromHexString(constants.NBO_ERC20_CONTRACT))) {
        return constants.NBO_TOKEN
    }
    
    throw new Error("Failed to get token for pool address: "+ address.toHexString());
}
