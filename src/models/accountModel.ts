import { Schema, model } from "mongoose";
import { User } from "../classes/user";
import { Account } from "../classes/account";

type AccountSchema = Account;
const accountSchema = new Schema<AccountSchema>(
  {
    owner: { type: User, required: true },
    balance: { type: Number, required: true },
  },
  {
    collection: "accounts",
  }
);

const AccountModel = model<AccountSchema>("Account", accountSchema);

export { AccountModel };
