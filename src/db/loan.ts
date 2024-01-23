import { LoanModel } from "../models/loanModel";

export const getLoans = () => LoanModel.find();
export const getLoansByUserId = (userId: string) =>
  LoanModel.findOne({ userId });

export const deleteLoansByUserId = (userId: string) =>
  LoanModel.findOneAndDelete({
    userId,
  });

export const updateLoansByUserId = (
  userId: string,
  values: Record<string, any>
) => {
  LoanModel.findByIdAndUpdate(userId, values);
};
