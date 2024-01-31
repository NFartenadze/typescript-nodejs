import { Schema, model } from "mongoose";
import { userSchema } from "./userModel";
import { transactionSchema } from "./transactionModel";

export const accountSchema = new Schema(
  {
    accountNumber: { type: String },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    balance: { type: Number },
    transactionHistory: [{ type: Schema.Types.ObjectId, ref: "Transaction" }],
  },
  {
    collection: "accounts",
  }
);

const AccountModel = model("Account", accountSchema);

export { AccountModel };
