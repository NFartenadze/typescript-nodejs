import { BankModel } from "../models/bankModel";

export const getBanks = () => BankModel.find();
export const getBankByName = (name: string) => BankModel.findOne({ name });

export const deleteBankByName = (name: string) =>
  BankModel.findOneAndDelete({
    name,
  });

export const updateBankByName = (name: string, values: Record<string, any>) => {
  BankModel.findOneAndUpdate({ name }, values);
};
