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

export async function updateBank(
  bankId: string,
  updateFields: Record<string, any>
) {
  try {
    const bank = await BankModel.findByIdAndUpdate(bankId, updateFields, {
      new: true,
    });
    console.log("Bank updated successfully:", bank);
  } catch (error: any) {
    console.error(error, error.message);
  }
}
