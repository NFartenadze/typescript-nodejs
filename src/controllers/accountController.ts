import express from "express";
import { createAccount, getAccounts } from "../db/account";
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
