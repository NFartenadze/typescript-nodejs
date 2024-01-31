import express from "express";

import {
  createSavingAccount,
  deleteSavingAccountByNumber,
  getSavingAccountByNumber,
  getSavingAccounts,
} from "../db/savingAccount";

export const getAllSavingAccounts = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const savingAccounts = await getSavingAccounts();
    return res.status(200).json(savingAccounts);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getSpecificSavingAccount = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { number } = req.params;
    const savingAccounts = await getSavingAccountByNumber(number);
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
    const savingAccount = await createSavingAccount(req.body);
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
    const { number } = req.params;

    const savingAccount = await getSavingAccountByNumber(number);
    if (!savingAccount) {
      return res.status(404).json({ message: "User not found" });
    }
    console.log(savingAccount);
    const deletedSavingAccount = await deleteSavingAccountByNumber(number);
    return res.json(deletedSavingAccount);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
