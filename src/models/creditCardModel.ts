import { Schema, model } from "mongoose";

export const creditCardSchema = new Schema(
  {
    cardNumber: { type: String },
    creditLimit: { type: Number },
    currentBalance: { type: Number },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    collection: "credit-card",
  }
);

const CreditCardModel = model("CreditCard", creditCardSchema);

export { CreditCardModel };
