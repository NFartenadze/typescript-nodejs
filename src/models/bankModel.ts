import { Schema, model } from "mongoose";

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
