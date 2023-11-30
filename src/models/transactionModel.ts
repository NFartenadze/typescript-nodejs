import { Schema, model } from "mongoose";
import { User } from "../classes/user";

interface ITransaction {
  id: string;
  amount: number;
  type: string;
  performedAt: Date;
}
const transactionSchema = new Schema<ITransaction>({
  id: { type: String, required: true },
  amount: { type: Number, required: true },
  type: { type: String, required: true },
  performedAt: { type: Date, required: true },
});

const Transaction = model<ITransaction>("Transaction", transactionSchema);

export { Transaction };
