import { Schema, model } from "mongoose";
import { userSchema } from "./userModel";

export const loanSchema = new Schema(
  {
    loanAmount: { type: Number },
    interestRate: { type: Number },
    repaymentPeriodMonths: { type: Number },
    remainingAmount: { type: Number },
    startDate: { type: Date },
    user: { type: userSchema },
    repaymentHistory: [{ type: Schema.Types.ObjectId, ref: "Transaction" }],
  },
  {
    collection: "loan",
  }
);

const LoanModel = model("Loan", loanSchema);

export { LoanModel };
