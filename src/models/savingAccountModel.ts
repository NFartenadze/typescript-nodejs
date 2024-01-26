import { Schema, model } from "mongoose";
import { SavingsAccount } from "../classes/SavingsAccount";
import { userSchema } from "./userModel";
import { transactionSchema } from "./transactionModel";

type SavingAccountSchema = SavingsAccount;

export const savingsAccountSchema = new Schema<SavingAccountSchema>(
  {
    accountNumber: { type: String },
    owner: { type: userSchema },
    balance: { type: Number },
    transactionHistory: { type: [transactionSchema] },
    interestRate: { type: Number },
  },
  {
    collection: "savings-account",
  }
);

const SavingAccountModel = model<SavingAccountSchema>(
  "SavingAccount",
  savingsAccountSchema
);

export { SavingAccountModel };
