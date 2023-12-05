import { Bank } from "../classes/bank";
import { BankModel } from "../models/bankModel";

export async function createBank() {
  try {
    const bank = await BankModel.create(new Bank("Example Bank"));
    console.log(`added bank ${bank}`);
  } catch (error: any) {
    console.log(error, { message: error.message });
  }
}

export async function getBanks() {
  try {
    const banks = await BankModel.find({});
    console.log(banks);
  } catch (error: any) {
    console.log(error, { message: error.message });
  }
}

export async function getBank(field: Record<keyof Bank, any>) {
  try {
    const bank = await BankModel.findOne(field);
    if (!bank) {
      console.log(`Couldn't find bank with ${field}`);
      return;
    }
    console.log(bank);
    return bank;
  } catch (error: any) {
    console.log(error, { message: error.message });
  }
}

export async function updateBank(
  field: Record<keyof Bank, any>,
  updateFields: Record<string, any>
) {
  try {
    const bank = await BankModel.findOne(field);

    if (!bank) {
      console.log(`Couldn't find bank with ${field}`);
      return;
    }
    await BankModel.updateOne(field, updateFields);
    console.log("Bank updated successfully:", bank);
  } catch (error: any) {
    console.error(error, error.message);
  }
}

export async function deleteBank(field: Record<keyof Bank, any>) {
  try {
    const bank = await BankModel.findOne(field);

    if (!bank) {
      console.log(`Bank with ${field} not found`);
      return;
    }
    await BankModel.deleteOne(field);
    console.log(`deleted bank with ${field}`);
  } catch (error: any) {
    console.log(error, { message: error.message });
  }
}

export async function deleteAccountById(bankId: string) {
  try {
    const bank = await BankModel.findById(bankId);
    if (!bank) {
      console.log(`Bank with ${bankId} not found`);
      return;
    }
    await BankModel.deleteOne({ _id: bankId });
    console.log(`deleted bank with id: ${bankId}`);
  } catch (error: any) {
    console.log(error, { message: error.message });
  }
}
