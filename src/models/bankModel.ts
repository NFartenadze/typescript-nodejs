import { Schema, model } from "mongoose";
import { Account } from "../classes/Account";
import { User } from "../classes/User";
import { Bank } from "../classes/Bank";

type BankSchema = Bank;

const bankSchema = new Schema<BankSchema>(
  {
    name: { type: String },
    accounts: { type: [Account] },
    users: { type: [User] },
  },
  {
    collection: "banks",
  }
);

const BankModel = model<BankSchema>("Bank", bankSchema);

export { BankModel };
