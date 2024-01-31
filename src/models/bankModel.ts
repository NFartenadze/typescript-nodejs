import { Document, Schema, model } from "mongoose";
import { accountSchema } from "./accountModel";
import { userSchema } from "./userModel";

const bankSchema = new Schema(
  {
    name: { type: String },
    accounts: [{ type: Schema.Types.ObjectId, ref: "Account" }],
    users: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    collection: "banks",
  }
);

const BankModel = model("Bank", bankSchema);

export { BankModel };
