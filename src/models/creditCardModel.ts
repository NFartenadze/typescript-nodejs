import { Schema, model } from "mongoose";
import { CreditCard } from "../classes/CreditCard";
import { userSchema } from "./userModel";

type CreditCardSchema = CreditCard;

export const creditCardSchema = new Schema<CreditCardSchema>(
  {
    cardNumber: { type: String },
    creditLimit: { type: Number },
    currentBalance: { type: Number },
    user: { type: userSchema },
  },
  {
    collection: "credit-card",
  }
);

const CreditCardModel = model<CreditCardSchema>("Bank", creditCardSchema);

export { CreditCardModel };
