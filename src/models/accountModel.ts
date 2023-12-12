import { Schema, model } from "mongoose";
import { User } from "../classes/User";
import { Account } from "../classes/Account";
import { Transaction } from "../classes/Transaction";

type AccountSchema = Account;
const accountSchema = new Schema<AccountSchema>(
  {
    accountNumber: { type: String },
    owner: { type: User },
    balance: { type: Number },
    transactionHistory: { type: [Transaction] },
  },
  {
    collection: "accounts",
  }
);

const AccountModel = model<AccountSchema>("Account", accountSchema);

export { AccountModel };
