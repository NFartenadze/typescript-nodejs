import { Schema, model } from "mongoose";
import { SavingsAccount } from "../classes/SavingsAccount";
import { userSchema } from "./userModel";
import { transactionSchema } from "./transactionModel";

type SavingsAccountSchema = SavingsAccount;

export const savingsAccountSchema = new Schema<SavingsAccountSchema>(
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

const SavingsModel = model<SavingsAccountSchema>("User", savingsAccountSchema);

export { SavingsModel };
