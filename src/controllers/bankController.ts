import express from "express";
import { createBank, getBanks } from "../db/bank";

export const getAllBanks = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const banks = await getBanks();
    return res.status(200).json(banks);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const createNewBank = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const bank = await createBank(req.body);
    return res.status(201).json(bank);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
