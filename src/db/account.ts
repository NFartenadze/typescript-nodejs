import { AccountModel } from "../models/accountModel";

export const getAccounts = () => AccountModel.find();
export const getAccountByNumber = (accountNumber: string) =>
  AccountModel.findOne({ accountNumber });

export const deleteAccountByNumber = (accountNumber: string) =>
  AccountModel.findOneAndDelete({
    accountNumber,
  });

export const updateAccountByNumber = (
  accountNumber: string,
  values: Record<string, any>
) => {
  AccountModel.findOneAndUpdate({ accountNumber }, values);
};
