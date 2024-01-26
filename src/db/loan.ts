import { LoanModel } from "../models/loanModel";

export const getLoans = () => LoanModel.find();
export const getLoansByUserId = (userId: string) =>
  LoanModel.findOne({ userId });

export const createLoan = async (values: Record<string, any>) => {
  const loan = await LoanModel.create(values);
  return loan.toObject();
};

export const updateLoansByUserId = (
  userId: string,
  values: Record<string, any>
) => {
  LoanModel.findByIdAndUpdate(userId, values);
};

export const deleteLoansByUserId = (userId: string) =>
  LoanModel.findOneAndDelete({
    userId,
  });
