import { Schema, model } from "mongoose";
import { CreditCard } from "../classes/CreditCard";
import { User } from "../classes/User";

type CreditCardSchema = CreditCard;

export const creditCardSchema = new Schema<CreditCardSchema>(
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

const CreditCardModel = model<CreditCardSchema>("CreditCard", creditCardSchema);

export { CreditCardModel };
