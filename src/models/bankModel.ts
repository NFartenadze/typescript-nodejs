import { Schema, model } from "mongoose";
import { Account } from "../classes/account";
import { User } from "../classes/user";
import { Bank } from "../classes/bank";

type BankSchema = Bank;

const bankSchema = new Schema<BankSchema>(
  {
    name: { type: String, required: true },
    accounts: { type: [Account], required: true },
    users: { type: [User], required: true },
  },
  {
    collection: "banks",
  }
);

const BankModel = model<BankSchema>("Bank", bankSchema);

export { BankModel };
