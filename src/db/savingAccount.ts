import { SavingAccountModel } from "../models/savingAccountModel";

export const getSavingAccounts = () => SavingAccountModel.find();
export const getSavingAccountByNumber = (accountNumber: string) =>
  SavingAccountModel.findOne({ accountNumber });

export const createSavingAccount = async (values: Record<string, any>) => {
  const savingAccount = await SavingAccountModel.create(values);
  return savingAccount.toObject();
};

export const updateSavingAccountByNumber = (
  accountNumber: string,
  values: Record<string, any>
) => {
  SavingAccountModel.findOneAndUpdate({ accountNumber }, values);
};

export const deleteSavingAccountByNumber = (accountNumber: string) =>
  SavingAccountModel.findOneAndDelete({
    accountNumber,
  });
