import express from "express";

import {
  createSavingsAccount,
  deleteSavingsAccountByNumber,
  getSavingsAccounts,
} from "../db/savingAccount";

export const getAllSavingAccounts = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const savingAccounts = await getSavingsAccounts();
    return res.status(200).json(savingAccounts);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
export const createNewSavingAccount = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    console.error(req.body);
    const savingAccount = await createSavingsAccount(req.body);
    return res.status(201).json(savingAccount);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteSavingAccount = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const deletedSavingAccount = await deleteSavingsAccountByNumber(id);
    return res.json(deletedSavingAccount);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
