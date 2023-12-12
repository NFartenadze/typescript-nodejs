import { Account } from "../classes/Account";
import { Bank } from "../classes/Bank";
import { User } from "../classes/User";

import { BankModel } from "../models/BankModel";

type FieldValue = string | Array<Account> | Array<User>;

export async function createBank() {
  try {
    const bank = await BankModel.create(new Bank("Example Bank"));
    if (!bank) {
      throw new Error("error creating account");
    }
    console.log(`added bank ${bank}`);
  } catch (error: any) {
    console.log(error, { message: error.message });
  }
}

export async function getBanks() {
  try {
    const banks = await BankModel.find({});
    if (banks.length === 0) {
      throw new Error(`Couldn't find banks`);
    }
  } catch (error: any) {
    console.log(error, { message: error.message });
  }
}

export async function getBank(field: Record<keyof Bank, FieldValue>) {
  try {
    const bank = await BankModel.findOne(field);
    if (!bank) {
      throw new Error(`Couldn't find bank with ${field}`);
    }
    console.log(bank);
    return bank;
  } catch (error: any) {
    console.log(error, { message: error.message });
  }
}

export async function updateBank(
  field: Record<keyof Bank, FieldValue>,
  updateFields: Record<string, FieldValue>
) {
  try {
    const bank = await BankModel.findOne(field);

    if (!bank) {
      throw new Error(`Couldn't find bank with ${field}`);
    }
    await BankModel.updateOne(field, updateFields);
    console.log("Bank updated successfully:", bank);
  } catch (error: any) {
    console.log(error);
    throw new Error("Error updating bank");
  }
}

export async function deleteBank(field: Record<keyof Bank, FieldValue>) {
  try {
    const bank = await BankModel.findOne(field);

    if (!bank) {
      throw new Error(`Couldn't find bank with ${field}`);
    }

    await BankModel.deleteOne(field);
    console.log(`deleted bank with ${field}`);
  } catch (error: any) {
    console.log(error);
    throw new Error("Error Deleting Account");
  }
}
