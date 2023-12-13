import { Schema, model } from "mongoose";
import { Account } from "../classes/Account";
import { User } from "../classes/User";
import { Bank } from "../classes/Bank";
import { accountSchema } from "./accountModel";
import { userSchema } from "./userModel";

type BankSchema = Bank;

const bankSchema = new Schema<BankSchema>(
  {
    name: { type: String },
    accounts: { type: [accountSchema] },
    users: { type: [userSchema] },
  },
  {
    collection: "banks",
  }
);

const BankModel = model<BankSchema>("Bank", bankSchema);

export { BankModel };
