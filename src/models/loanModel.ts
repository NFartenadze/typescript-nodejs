import { Schema, model } from "mongoose";
import { userSchema } from "./userModel";
import { Loan } from "../classes/Loan";
import { transactionSchema } from "./transactionModel";

type LoanSchema = Loan;

export const loanSchema = new Schema<LoanSchema>(
  {
    loanAmount: { type: Number },
    interestRate: { type: Number },
    repaymentPeriodMonths: { type: Number },
    remainingAmount: { type: Number },
    startDate: { type: Date },
    user: { type: userSchema },
    repaymentHistory: { type: [transactionSchema] },
  },
  {
    collection: "loan",
  }
);

const LoanModel = model<LoanSchema>("User", loanSchema);

export { LoanModel };
