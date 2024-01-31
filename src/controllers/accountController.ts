import express from "express";
import {
  createAccount,
  deleteAccountByNumber,
  getAccountByNumber,
  getAccounts,
} from "../db/account";
export const getAllAccounts = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const accounts = await getAccounts();
    return res.status(200).json(accounts);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
export const createNewAccount = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const Account = await createAccount(req.body);
    return res.status(201).json(Account);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getSpecificAccount = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { number } = req.params;
    const account = await getAccountByNumber(number);
    if (!account) {
      return res.status(404).json({ message: "Account not found" });
    }
    return res.status(200).json(account);
  } catch (error) {
    console.log(error);
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
    const Account = await getAccountByNumber(number);
    if (!Account) {
      return res.status(404).json({ message: "Account not found" });
    }
    console.log(Account);

    const deletedAccount = await deleteAccountByNumber(number);
    return res.json(deletedAccount);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
