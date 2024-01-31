import { Schema, model } from "mongoose";
import { Bank } from "../classes/Bank";
import { accountSchema } from "./accountModel";
import { userSchema } from "./userModel";

type BankSchema = Bank;

const bankSchema = new Schema<BankSchema>(
  {
    name: { type: String },
    accounts: [{ type: Schema.Types.ObjectId, ref: "Account" }],
    users: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    collection: "banks",
  }
);

const BankModel = model<BankSchema>("Bank", bankSchema);

export { BankModel };
