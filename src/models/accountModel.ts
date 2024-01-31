import { Schema, model } from "mongoose";
import { Account } from "../classes/Account";
import { userSchema } from "./userModel";
import { transactionSchema } from "./transactionModel";

type AccountSchema = Account;
export const accountSchema = new Schema<AccountSchema>(
  {
    accountNumber: { type: String },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    balance: { type: Number },
    transactionHistory: [{ type: Schema.Types.ObjectId, ref: "Transaction" }],
  },
  {
    collection: "accounts",
  }
);

const AccountModel = model<AccountSchema>("Account", accountSchema);

export { AccountModel };
