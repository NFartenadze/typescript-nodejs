import { Bank } from "../classes/bank";
import { BankModel } from "../models/bankModel";

export async function addBank() {
  const bank = await BankModel.create(new Bank());
  console.log("added bank");
}
