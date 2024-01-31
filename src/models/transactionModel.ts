import { Schema, model } from "mongoose";

export const transactionSchema = new Schema(
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

const TransactionModel = model("Transaction", transactionSchema);

export { TransactionModel };
