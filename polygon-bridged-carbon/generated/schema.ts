// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class CarbonOffset extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("name", Value.fromString(""));
    this.set("tokenAddress", Value.fromString(""));
    this.set("bridge", Value.fromString(""));
    this.set("registry", Value.fromString(""));
    this.set("totalBridged", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("totalRetired", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("currentSupply", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("vintage", Value.fromString(""));
    this.set("projectID", Value.fromString(""));
    this.set("standard", Value.fromString(""));
    this.set("methodology", Value.fromString(""));
    this.set("methodologyCategory", Value.fromString(""));
    this.set("country", Value.fromString(""));
    this.set("region", Value.fromString(""));
    this.set("storageMethod", Value.fromString(""));
    this.set("method", Value.fromString(""));
    this.set("emissionType", Value.fromString(""));
    this.set("category", Value.fromString(""));
    this.set("coBenefits", Value.fromString(""));
    this.set("correspAdjustment", Value.fromString(""));
    this.set("additionalCertification", Value.fromString(""));
    this.set("klimaRanking", Value.fromBigInt(BigInt.zero()));
    this.set("balanceBCT", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("balanceNCT", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("balanceUBO", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("balanceNBO", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("lastUpdate", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save CarbonOffset entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save CarbonOffset entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("CarbonOffset", id.toString(), this);
    }
  }

  static load(id: string): CarbonOffset | null {
    return changetype<CarbonOffset | null>(store.get("CarbonOffset", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get tokenAddress(): string {
    let value = this.get("tokenAddress");
    return value!.toString();
  }

  set tokenAddress(value: string) {
    this.set("tokenAddress", Value.fromString(value));
  }

  get bridge(): string {
    let value = this.get("bridge");
    return value!.toString();
  }

  set bridge(value: string) {
    this.set("bridge", Value.fromString(value));
  }

  get registry(): string {
    let value = this.get("registry");
    return value!.toString();
  }

  set registry(value: string) {
    this.set("registry", Value.fromString(value));
  }

  get totalBridged(): BigDecimal {
    let value = this.get("totalBridged");
    return value!.toBigDecimal();
  }

  set totalBridged(value: BigDecimal) {
    this.set("totalBridged", Value.fromBigDecimal(value));
  }

  get totalRetired(): BigDecimal {
    let value = this.get("totalRetired");
    return value!.toBigDecimal();
  }

  set totalRetired(value: BigDecimal) {
    this.set("totalRetired", Value.fromBigDecimal(value));
  }

  get currentSupply(): BigDecimal {
    let value = this.get("currentSupply");
    return value!.toBigDecimal();
  }

  set currentSupply(value: BigDecimal) {
    this.set("currentSupply", Value.fromBigDecimal(value));
  }

  get vintage(): string {
    let value = this.get("vintage");
    return value!.toString();
  }

  set vintage(value: string) {
    this.set("vintage", Value.fromString(value));
  }

  get projectID(): string {
    let value = this.get("projectID");
    return value!.toString();
  }

  set projectID(value: string) {
    this.set("projectID", Value.fromString(value));
  }

  get standard(): string {
    let value = this.get("standard");
    return value!.toString();
  }

  set standard(value: string) {
    this.set("standard", Value.fromString(value));
  }

  get methodology(): string {
    let value = this.get("methodology");
    return value!.toString();
  }

  set methodology(value: string) {
    this.set("methodology", Value.fromString(value));
  }

  get methodologyCategory(): string {
    let value = this.get("methodologyCategory");
    return value!.toString();
  }

  set methodologyCategory(value: string) {
    this.set("methodologyCategory", Value.fromString(value));
  }

  get country(): string {
    let value = this.get("country");
    return value!.toString();
  }

  set country(value: string) {
    this.set("country", Value.fromString(value));
  }

  get region(): string {
    let value = this.get("region");
    return value!.toString();
  }

  set region(value: string) {
    this.set("region", Value.fromString(value));
  }

  get storageMethod(): string {
    let value = this.get("storageMethod");
    return value!.toString();
  }

  set storageMethod(value: string) {
    this.set("storageMethod", Value.fromString(value));
  }

  get method(): string {
    let value = this.get("method");
    return value!.toString();
  }

  set method(value: string) {
    this.set("method", Value.fromString(value));
  }

  get emissionType(): string {
    let value = this.get("emissionType");
    return value!.toString();
  }

  set emissionType(value: string) {
    this.set("emissionType", Value.fromString(value));
  }

  get category(): string {
    let value = this.get("category");
    return value!.toString();
  }

  set category(value: string) {
    this.set("category", Value.fromString(value));
  }

  get isCorsiaCompliant(): boolean {
    let value = this.get("isCorsiaCompliant");
    return value!.toBoolean();
  }

  set isCorsiaCompliant(value: boolean) {
    this.set("isCorsiaCompliant", Value.fromBoolean(value));
  }

  get coBenefits(): string {
    let value = this.get("coBenefits");
    return value!.toString();
  }

  set coBenefits(value: string) {
    this.set("coBenefits", Value.fromString(value));
  }

  get correspAdjustment(): string {
    let value = this.get("correspAdjustment");
    return value!.toString();
  }

  set correspAdjustment(value: string) {
    this.set("correspAdjustment", Value.fromString(value));
  }

  get additionalCertification(): string {
    let value = this.get("additionalCertification");
    return value!.toString();
  }

  set additionalCertification(value: string) {
    this.set("additionalCertification", Value.fromString(value));
  }

  get klimaRanking(): BigInt {
    let value = this.get("klimaRanking");
    return value!.toBigInt();
  }

  set klimaRanking(value: BigInt) {
    this.set("klimaRanking", Value.fromBigInt(value));
  }

  get bridges(): Array<string> | null {
    let value = this.get("bridges");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set bridges(value: Array<string> | null) {
    if (!value) {
      this.unset("bridges");
    } else {
      this.set("bridges", Value.fromStringArray(<Array<string>>value));
    }
  }

  get retirements(): Array<string> | null {
    let value = this.get("retirements");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set retirements(value: Array<string> | null) {
    if (!value) {
      this.unset("retirements");
    } else {
      this.set("retirements", Value.fromStringArray(<Array<string>>value));
    }
  }

  get balanceBCT(): BigDecimal {
    let value = this.get("balanceBCT");
    return value!.toBigDecimal();
  }

  set balanceBCT(value: BigDecimal) {
    this.set("balanceBCT", Value.fromBigDecimal(value));
  }

  get balanceNCT(): BigDecimal {
    let value = this.get("balanceNCT");
    return value!.toBigDecimal();
  }

  set balanceNCT(value: BigDecimal) {
    this.set("balanceNCT", Value.fromBigDecimal(value));
  }

  get balanceUBO(): BigDecimal {
    let value = this.get("balanceUBO");
    return value!.toBigDecimal();
  }

  set balanceUBO(value: BigDecimal) {
    this.set("balanceUBO", Value.fromBigDecimal(value));
  }

  get balanceNBO(): BigDecimal {
    let value = this.get("balanceNBO");
    return value!.toBigDecimal();
  }

  set balanceNBO(value: BigDecimal) {
    this.set("balanceNBO", Value.fromBigDecimal(value));
  }

  get lastUpdate(): BigInt {
    let value = this.get("lastUpdate");
    return value!.toBigInt();
  }

  set lastUpdate(value: BigInt) {
    this.set("lastUpdate", Value.fromBigInt(value));
  }
}

export class Bridge extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("transaction", Value.fromString(""));
    this.set("offset", Value.fromString(""));
    this.set("value", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("bridger", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Bridge entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Bridge entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Bridge", id.toString(), this);
    }
  }

  static load(id: string): Bridge | null {
    return changetype<Bridge | null>(store.get("Bridge", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get offset(): string {
    let value = this.get("offset");
    return value!.toString();
  }

  set offset(value: string) {
    this.set("offset", Value.fromString(value));
  }

  get value(): BigDecimal {
    let value = this.get("value");
    return value!.toBigDecimal();
  }

  set value(value: BigDecimal) {
    this.set("value", Value.fromBigDecimal(value));
  }

  get bridger(): string {
    let value = this.get("bridger");
    return value!.toString();
  }

  set bridger(value: string) {
    this.set("bridger", Value.fromString(value));
  }
}

export class Deposit extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("transaction", Value.fromString(""));
    this.set("offset", Value.fromString(""));
    this.set("pool", Value.fromString(""));
    this.set("value", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("depositor", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Deposit entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Deposit entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Deposit", id.toString(), this);
    }
  }

  static load(id: string): Deposit | null {
    return changetype<Deposit | null>(store.get("Deposit", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get offset(): string {
    let value = this.get("offset");
    return value!.toString();
  }

  set offset(value: string) {
    this.set("offset", Value.fromString(value));
  }

  get pool(): string {
    let value = this.get("pool");
    return value!.toString();
  }

  set pool(value: string) {
    this.set("pool", Value.fromString(value));
  }

  get value(): BigDecimal {
    let value = this.get("value");
    return value!.toBigDecimal();
  }

  set value(value: BigDecimal) {
    this.set("value", Value.fromBigDecimal(value));
  }

  get depositor(): string {
    let value = this.get("depositor");
    return value!.toString();
  }

  set depositor(value: string) {
    this.set("depositor", Value.fromString(value));
  }
}

export class Redeem extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("transaction", Value.fromString(""));
    this.set("offset", Value.fromString(""));
    this.set("pool", Value.fromString(""));
    this.set("value", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("redeemer", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Redeem entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Redeem entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Redeem", id.toString(), this);
    }
  }

  static load(id: string): Redeem | null {
    return changetype<Redeem | null>(store.get("Redeem", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get offset(): string {
    let value = this.get("offset");
    return value!.toString();
  }

  set offset(value: string) {
    this.set("offset", Value.fromString(value));
  }

  get pool(): string {
    let value = this.get("pool");
    return value!.toString();
  }

  set pool(value: string) {
    this.set("pool", Value.fromString(value));
  }

  get value(): BigDecimal {
    let value = this.get("value");
    return value!.toBigDecimal();
  }

  set value(value: BigDecimal) {
    this.set("value", Value.fromBigDecimal(value));
  }

  get redeemer(): string {
    let value = this.get("redeemer");
    return value!.toString();
  }

  set redeemer(value: string) {
    this.set("redeemer", Value.fromString(value));
  }
}

export class Retire extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("transaction", Value.fromString(""));
    this.set("offset", Value.fromString(""));
    this.set("value", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("beneficiary", Value.fromString(""));
    this.set("retiree", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Retire entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Retire entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Retire", id.toString(), this);
    }
  }

  static load(id: string): Retire | null {
    return changetype<Retire | null>(store.get("Retire", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get offset(): string {
    let value = this.get("offset");
    return value!.toString();
  }

  set offset(value: string) {
    this.set("offset", Value.fromString(value));
  }

  get value(): BigDecimal {
    let value = this.get("value");
    return value!.toBigDecimal();
  }

  set value(value: BigDecimal) {
    this.set("value", Value.fromBigDecimal(value));
  }

  get beneficiary(): string {
    let value = this.get("beneficiary");
    return value!.toString();
  }

  set beneficiary(value: string) {
    this.set("beneficiary", Value.fromString(value));
  }

  get retiree(): string {
    let value = this.get("retiree");
    return value!.toString();
  }

  set retiree(value: string) {
    this.set("retiree", Value.fromString(value));
  }
}

export class Transaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
    this.set("blockHash", Value.fromBytes(Bytes.empty()));
    this.set("from", Value.fromBytes(Bytes.empty()));
    this.set("value", Value.fromBigInt(BigInt.zero()));
    this.set("gasPrice", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Transaction entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Transaction entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Transaction", id.toString(), this);
    }
  }

  static load(id: string): Transaction | null {
    return changetype<Transaction | null>(store.get("Transaction", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockHash(): Bytes {
    let value = this.get("blockHash");
    return value!.toBytes();
  }

  set blockHash(value: Bytes) {
    this.set("blockHash", Value.fromBytes(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value!.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes | null {
    let value = this.get("to");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set to(value: Bytes | null) {
    if (!value) {
      this.unset("to");
    } else {
      this.set("to", Value.fromBytes(<Bytes>value));
    }
  }

  get value(): BigInt {
    let value = this.get("value");
    return value!.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get gasPrice(): BigInt {
    let value = this.get("gasPrice");
    return value!.toBigInt();
  }

  set gasPrice(value: BigInt) {
    this.set("gasPrice", Value.fromBigInt(value));
  }
}

export class KlimaRetire extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("transaction", Value.fromString(""));
    this.set("index", Value.fromBigInt(BigInt.zero()));
    this.set("offset", Value.fromString(""));
    this.set("pool", Value.fromString(""));
    this.set("token", Value.fromString(""));
    this.set("amount", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("feeAmount", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("retiringAddress", Value.fromString(""));
    this.set("beneficiary", Value.fromString(""));
    this.set("beneficiaryAddress", Value.fromString(""));
    this.set("retirementMessage", Value.fromString(""));
    this.set("specific", Value.fromBoolean(false));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save KlimaRetire entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save KlimaRetire entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("KlimaRetire", id.toString(), this);
    }
  }

  static load(id: string): KlimaRetire | null {
    return changetype<KlimaRetire | null>(store.get("KlimaRetire", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get index(): BigInt {
    let value = this.get("index");
    return value!.toBigInt();
  }

  set index(value: BigInt) {
    this.set("index", Value.fromBigInt(value));
  }

  get offset(): string {
    let value = this.get("offset");
    return value!.toString();
  }

  set offset(value: string) {
    this.set("offset", Value.fromString(value));
  }

  get pool(): string {
    let value = this.get("pool");
    return value!.toString();
  }

  set pool(value: string) {
    this.set("pool", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value!.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get feeAmount(): BigDecimal {
    let value = this.get("feeAmount");
    return value!.toBigDecimal();
  }

  set feeAmount(value: BigDecimal) {
    this.set("feeAmount", Value.fromBigDecimal(value));
  }

  get retiringAddress(): string {
    let value = this.get("retiringAddress");
    return value!.toString();
  }

  set retiringAddress(value: string) {
    this.set("retiringAddress", Value.fromString(value));
  }

  get beneficiary(): string {
    let value = this.get("beneficiary");
    return value!.toString();
  }

  set beneficiary(value: string) {
    this.set("beneficiary", Value.fromString(value));
  }

  get beneficiaryAddress(): string {
    let value = this.get("beneficiaryAddress");
    return value!.toString();
  }

  set beneficiaryAddress(value: string) {
    this.set("beneficiaryAddress", Value.fromString(value));
  }

  get retirementMessage(): string {
    let value = this.get("retirementMessage");
    return value!.toString();
  }

  set retirementMessage(value: string) {
    this.set("retirementMessage", Value.fromString(value));
  }

  get specific(): boolean {
    let value = this.get("specific");
    return value!.toBoolean();
  }

  set specific(value: boolean) {
    this.set("specific", Value.fromBoolean(value));
  }

  get toucanCertificateTokenID(): BigInt | null {
    let value = this.get("toucanCertificateTokenID");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set toucanCertificateTokenID(value: BigInt | null) {
    if (!value) {
      this.unset("toucanCertificateTokenID");
    } else {
      this.set("toucanCertificateTokenID", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class DailyKlimaRetirement extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("pool", Value.fromString(""));
    this.set("token", Value.fromString(""));
    this.set("offset", Value.fromString(""));
    this.set("amount", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("feeAmount", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save DailyKlimaRetirement entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save DailyKlimaRetirement entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("DailyKlimaRetirement", id.toString(), this);
    }
  }

  static load(id: string): DailyKlimaRetirement | null {
    return changetype<DailyKlimaRetirement | null>(
      store.get("DailyKlimaRetirement", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get pool(): string {
    let value = this.get("pool");
    return value!.toString();
  }

  set pool(value: string) {
    this.set("pool", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get offset(): string {
    let value = this.get("offset");
    return value!.toString();
  }

  set offset(value: string) {
    this.set("offset", Value.fromString(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value!.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get feeAmount(): BigDecimal {
    let value = this.get("feeAmount");
    return value!.toBigDecimal();
  }

  set feeAmount(value: BigDecimal) {
    this.set("feeAmount", Value.fromBigDecimal(value));
  }
}

export class CarbonMetric extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("bctSupply", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("nctSupply", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("mco2Supply", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("uboSupply", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("nboSupply", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("totalCarbonSupply", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("tco2Retired", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("mco2Retired", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("c3tRetired", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("totalRetirements", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("bctKlimaRetired", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("nctKlimaRetired", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("mco2KlimaRetired", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("uboKlimaRetired", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("nboKlimaRetired", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("totalKlimaRetirements", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save CarbonMetric entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save CarbonMetric entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("CarbonMetric", id.toString(), this);
    }
  }

  static load(id: string): CarbonMetric | null {
    return changetype<CarbonMetric | null>(store.get("CarbonMetric", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get bctSupply(): BigDecimal {
    let value = this.get("bctSupply");
    return value!.toBigDecimal();
  }

  set bctSupply(value: BigDecimal) {
    this.set("bctSupply", Value.fromBigDecimal(value));
  }

  get nctSupply(): BigDecimal {
    let value = this.get("nctSupply");
    return value!.toBigDecimal();
  }

  set nctSupply(value: BigDecimal) {
    this.set("nctSupply", Value.fromBigDecimal(value));
  }

  get mco2Supply(): BigDecimal {
    let value = this.get("mco2Supply");
    return value!.toBigDecimal();
  }

  set mco2Supply(value: BigDecimal) {
    this.set("mco2Supply", Value.fromBigDecimal(value));
  }

  get uboSupply(): BigDecimal {
    let value = this.get("uboSupply");
    return value!.toBigDecimal();
  }

  set uboSupply(value: BigDecimal) {
    this.set("uboSupply", Value.fromBigDecimal(value));
  }

  get nboSupply(): BigDecimal {
    let value = this.get("nboSupply");
    return value!.toBigDecimal();
  }

  set nboSupply(value: BigDecimal) {
    this.set("nboSupply", Value.fromBigDecimal(value));
  }

  get totalCarbonSupply(): BigDecimal {
    let value = this.get("totalCarbonSupply");
    return value!.toBigDecimal();
  }

  set totalCarbonSupply(value: BigDecimal) {
    this.set("totalCarbonSupply", Value.fromBigDecimal(value));
  }

  get tco2Retired(): BigDecimal {
    let value = this.get("tco2Retired");
    return value!.toBigDecimal();
  }

  set tco2Retired(value: BigDecimal) {
    this.set("tco2Retired", Value.fromBigDecimal(value));
  }

  get mco2Retired(): BigDecimal {
    let value = this.get("mco2Retired");
    return value!.toBigDecimal();
  }

  set mco2Retired(value: BigDecimal) {
    this.set("mco2Retired", Value.fromBigDecimal(value));
  }

  get c3tRetired(): BigDecimal {
    let value = this.get("c3tRetired");
    return value!.toBigDecimal();
  }

  set c3tRetired(value: BigDecimal) {
    this.set("c3tRetired", Value.fromBigDecimal(value));
  }

  get totalRetirements(): BigDecimal {
    let value = this.get("totalRetirements");
    return value!.toBigDecimal();
  }

  set totalRetirements(value: BigDecimal) {
    this.set("totalRetirements", Value.fromBigDecimal(value));
  }

  get bctKlimaRetired(): BigDecimal {
    let value = this.get("bctKlimaRetired");
    return value!.toBigDecimal();
  }

  set bctKlimaRetired(value: BigDecimal) {
    this.set("bctKlimaRetired", Value.fromBigDecimal(value));
  }

  get nctKlimaRetired(): BigDecimal {
    let value = this.get("nctKlimaRetired");
    return value!.toBigDecimal();
  }

  set nctKlimaRetired(value: BigDecimal) {
    this.set("nctKlimaRetired", Value.fromBigDecimal(value));
  }

  get mco2KlimaRetired(): BigDecimal {
    let value = this.get("mco2KlimaRetired");
    return value!.toBigDecimal();
  }

  set mco2KlimaRetired(value: BigDecimal) {
    this.set("mco2KlimaRetired", Value.fromBigDecimal(value));
  }

  get uboKlimaRetired(): BigDecimal {
    let value = this.get("uboKlimaRetired");
    return value!.toBigDecimal();
  }

  set uboKlimaRetired(value: BigDecimal) {
    this.set("uboKlimaRetired", Value.fromBigDecimal(value));
  }

  get nboKlimaRetired(): BigDecimal {
    let value = this.get("nboKlimaRetired");
    return value!.toBigDecimal();
  }

  set nboKlimaRetired(value: BigDecimal) {
    this.set("nboKlimaRetired", Value.fromBigDecimal(value));
  }

  get totalKlimaRetirements(): BigDecimal {
    let value = this.get("totalKlimaRetirements");
    return value!.toBigDecimal();
  }

  set totalKlimaRetirements(value: BigDecimal) {
    this.set("totalKlimaRetirements", Value.fromBigDecimal(value));
  }
}

export class ToucanCertificate extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("transaction", Value.fromString(""));
    this.set("tokenID", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ToucanCertificate entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ToucanCertificate entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ToucanCertificate", id.toString(), this);
    }
  }

  static load(id: string): ToucanCertificate | null {
    return changetype<ToucanCertificate | null>(
      store.get("ToucanCertificate", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get klimaRetire(): string | null {
    let value = this.get("klimaRetire");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set klimaRetire(value: string | null) {
    if (!value) {
      this.unset("klimaRetire");
    } else {
      this.set("klimaRetire", Value.fromString(<string>value));
    }
  }

  get tokenID(): BigInt {
    let value = this.get("tokenID");
    return value!.toBigInt();
  }

  set tokenID(value: BigInt) {
    this.set("tokenID", Value.fromBigInt(value));
  }
}
