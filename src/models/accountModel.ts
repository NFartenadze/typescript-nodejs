import { Schema, model } from "mongoose";
import { User } from "../classes/user";
import { Account } from "../classes/account";
import { Transaction } from "../classes/transaction";

type AccountSchema = Account;
const accountSchema = new Schema<AccountSchema>(
  {
    accountNumber: { type: String, required: true },
    owner: { type: User, required: true },
    balance: { type: Number, required: true },
    transactionHistory: { type: [Transaction], required: true },
  },
  {
    collection: "accounts",
  }
);

const AccountModel = model<AccountSchema>("Account", accountSchema);

export { AccountModel };
