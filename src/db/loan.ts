import { LoanModel } from "../models/loanModel";

export const getLoans = () => LoanModel.find();
export const getLoanByUserId = (userId: string) =>
  LoanModel.findOne({ userId });

export const createLoan = async (values: Record<string, any>) => {
  const loan = await LoanModel.create(values);
  return loan.toObject();
};

export const updateLoanByUserId = (
  userId: string,
  values: Record<string, any>
) => {
  LoanModel.findByIdAndUpdate(userId, values);
};

export const deleteLoanByUserId = (userId: string) =>
  LoanModel.findOneAndDelete({
    userId,
  });
