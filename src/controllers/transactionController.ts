import express from "express";
import { TransactionModel } from "../models/transactionModel";
import logger from "../helpers/logger";

export const getAllTransactions = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const transactions = await TransactionModel.find();
    return res.status(200).json(transactions);
  } catch (error) {
    logger.error(error);
    return res.sendStatus(400);
  }
};

export const getSpecificTransaction = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const transaction = await TransactionModel.findOne({ _id: id });
    return res.status(200).json(transaction);
  } catch (error) {
    logger.error(error);
    return res.sendStatus(400);
  }
};
export const createNewTransaction = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    console.error(req.body);
    const transaction = await TransactionModel.create(req.body);
    return res.status(201).json(transaction);
  } catch (error) {
    logger.error(error);
    return res.sendStatus(400);
  }
};

export const deleteTransaction = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const transaction = await TransactionModel.findOne({ _id: id });
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }
    console.log(transaction);
    const deletedTransaction = await TransactionModel.findOneAndDelete({
      _id: id,
    });
    return res.json(deletedTransaction);
  } catch (error) {
    logger.error(error);
    return res.sendStatus(400);
  }
};

export const updateTransaction = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const updatedTransaction = await TransactionModel.findByIdAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    return res.status(200).json(updatedTransaction);
  } catch (error) {
    logger.error(error);
    return res.sendStatus(400);
  }
};
