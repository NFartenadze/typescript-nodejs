import { Schema, model } from "mongoose";
import { Account } from "../classes/Account";
import { userSchema } from "./userModel";
import { transactionSchema } from "./transactionMode";

type AccountSchema = Account;
export const accountSchema = new Schema<AccountSchema>(
  {
    owner: { type: userSchema },
    balance: { type: Number },
    transactionHistory: { type: [transactionSchema] },
  },
  {
    collection: "accounts",
  }
);

const AccountModel = model<AccountSchema>("Account", accountSchema);

export { AccountModel };
