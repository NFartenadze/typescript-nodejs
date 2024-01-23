import { SavingsModel } from "../models/savingsAccountModel";

export const getSavingsAccounts = () => SavingsModel.find();
export const getSavingsAccountByNumber = (accountNumber: string) =>
  SavingsModel.findOne({ accountNumber });

export const deleteSavingsAccountByNumber = (accountNumber: string) =>
  SavingsModel.findOneAndDelete({
    accountNumber,
  });

export const updateSavingsAccountByNumber = (
  accountNumber: string,
  values: Record<string, any>
) => {
  SavingsModel.findOneAndUpdate({ accountNumber }, values);
};
