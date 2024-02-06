import { Schema, model } from "mongoose";

export const savingsAccountSchema = new Schema(
  {
    accountNumber: { type: String },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    balance: { type: Number },
    transactionHistory: [{ type: Schema.Types.ObjectId, ref: "Transaction" }],
    interestRate: { type: Number },
  },
  {
    collection: "savings-account",
  }
);

const SavingAccountModel = model("SavingAccount", savingsAccountSchema);

export { SavingAccountModel };
