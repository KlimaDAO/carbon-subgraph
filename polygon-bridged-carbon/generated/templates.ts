// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  DataSourceTemplate,
  DataSourceContext
} from "@graphprotocol/graph-ts";

export class ToucanCarbonOffsets extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("ToucanCarbonOffsets", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "ToucanCarbonOffsets",
      [address.toHex()],
      context
    );
  }
}

export class C3ProjectToken extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("C3ProjectToken", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "C3ProjectToken",
      [address.toHex()],
      context
    );
  }
}
