import { TransactionModel } from "../models/transactionModel";

export const getTransactions = () => TransactionModel.find();
export const getTransactionById = (id: string) => TransactionModel.findById(id);

export const createTransaction = async (values: Record<string, any>) => {
  const transaction = await TransactionModel.create(values);
  return transaction.toObject();
};

export const deleteTransactionById = (id: string) =>
  TransactionModel.findOneAndDelete({
    _id: id,
  });

export const updateTransactionById = (
  id: string,
  values: Record<string, any>
) => {
  TransactionModel.findByIdAndUpdate(id, values);
};
