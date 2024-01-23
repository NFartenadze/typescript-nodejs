import { TransactionModel } from "../models/transactionModel";

export const getTransactions = () => TransactionModel.find();
export const getTransactionById = (id: string) => TransactionModel.findById(id);

export const deleteTransactionById = (id: string) =>
  TransactionModel.findOneAndDelete({
    id,
  });

export const updateTransactionById = (
  id: string,
  values: Record<string, any>
) => {
  TransactionModel.findByIdAndUpdate(id, values);
};
