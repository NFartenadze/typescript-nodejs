import { Schema, model } from "mongoose";
import { Transaction } from "../classes/Transaction";

type TransactionSchema = Transaction;

export const transactionSchema = new Schema<TransactionSchema>(
  {
    transactionId: { type: String },
    amount: { type: Number },
    type: {
      type: String,
      enum: ["transfer", "deposit", "withdraw", "receive"],
    },
    performedAt: { type: Date },
  },
  {
    collection: "transaction",
  }
);

const TransactionModel = model<TransactionSchema>(
  "Transaction",
  transactionSchema
);

export { TransactionModel };
