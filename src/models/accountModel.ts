import { Schema, model } from "mongoose";
import { User } from "../classes/user";
import { Account } from "../classes/account";
import { Transaction } from "../classes/transaction";

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
