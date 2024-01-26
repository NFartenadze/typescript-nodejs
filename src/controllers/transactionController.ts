import express from "express";

import {
  createTransaction,
  deleteTransactionById,
  getTransactions,
} from "../db/transaction";

export const getAllTransactions = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const transactions = await getTransactions();
    return res.status(200).json(transactions);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
export const createNewTransaction = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    console.error(req.body);
    const transaction = await createTransaction(req.body);
    return res.status(201).json(transaction);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteTransaction = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const deletedTransaction = await deleteTransactionById(id);
    return res.json(deletedTransaction);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
