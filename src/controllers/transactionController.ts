import express from "express";

import {
  createTransaction,
  deleteTransactionById,
  getTransactionById,
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

export const getSpecificTransaction = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const transaction = await getTransactionById(id);
    return res.status(200).json(transaction);
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

    const transaction = await getTransactionById(id);
    if (!transaction) {
      return res.status(404).json({ message: "User not found" });
    }
    console.log(transaction);
    const deletedTransaction = await deleteTransactionById(id);
    return res.json(deletedTransaction);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
