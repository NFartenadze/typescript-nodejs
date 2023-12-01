import { Schema, model } from "mongoose";
import { Account } from "../classes/account";
import { User } from "../classes/user";
import { Transaction } from "../classes/transaction";
import { Bank } from "../classes/bank";

type BankSchema = Bank;

const bankSchema = new Schema<BankSchema>(
  {
    accounts: { type: [Account], required: true },
    users: { type: [User], required: true },
    transactions: { type: [Transaction], required: true },
  },
  {
    collection: "banks",
  }
);

const BankModel = model<BankSchema>("Bank", bankSchema);

export { BankModel };
