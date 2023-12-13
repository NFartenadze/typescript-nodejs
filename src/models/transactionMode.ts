import { Schema } from "mongoose";
import { Transaction } from "../classes/Transaction";

type TransactionSchema = Transaction;

export const transactionSchema = new Schema<TransactionSchema>({
  amount: { type: Number },
  type: {
    type: String,
    enum: ["transfer", "deposit", "withdraw", "receive"],
  },
  performedAt: { type: Date },
});
