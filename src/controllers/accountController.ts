import express from "express";
import { AccountModel } from "../models/accountModel";
import logger from "../helpers/logger";

export const getAllAccounts = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const accounts = await AccountModel.find();
    return res.status(200).json(accounts);
  } catch (error) {
    logger.error(error);
    return res.sendStatus(400);
  }
};
export const createNewAccount = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const account = await AccountModel.create(req.body);
    return res.status(201).json(account);
  } catch (error) {
    logger.error(error);
    return res.sendStatus(400);
  }
};

export const getSpecificAccount = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { number } = req.params;
    const account = await AccountModel.findOne({ accountNumber: number });
    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }
    return res.status(200).json(account);
  } catch (error) {
    logger.error(error);
    return res.sendStatus(400);
  }
};
export const deleteAccount = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { number } = req.params;
    console.log(number);
    // Check if Account exists
    const Account = await AccountModel.findOne({ accountNumber: number });
    if (!Account) {
      return res.status(404).json({ message: "Account not found" });
    }
    console.log(Account);

    const deletedAccount = await AccountModel.findOneAndDelete({
      accountNumber: number,
    });
    return res.json(deletedAccount);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateAccount = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { number } = req.params;
    const updatedAccount = await AccountModel.findOneAndUpdate(
      { accountNumber: number },
      req.body,
      { new: true }
    );
    return res.json(updatedAccount);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
