import { SavingsAccountModel } from "../models/savingsAccountModel";

export const getSavingsAccounts = () => SavingsAccountModel.find();
export const getSavingsAccountByNumber = (accountNumber: string) =>
  SavingsAccountModel.findOne({ accountNumber });

export const createSavingsAccount = async (values: Record<string, any>) => {
  const savingsAccount = await SavingsAccountModel.create(values);
  return savingsAccount.toObject();
};

export const updateSavingsAccountByNumber = (
  accountNumber: string,
  values: Record<string, any>
) => {
  SavingsAccountModel.findOneAndUpdate({ accountNumber }, values);
};

export const deleteSavingsAccountByNumber = (accountNumber: string) =>
  SavingsAccountModel.findOneAndDelete({
    accountNumber,
  });
