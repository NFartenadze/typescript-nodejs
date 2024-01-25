import { FilterQuery } from "mongoose";
import { Account } from "../classes/Account";
import { Bank } from "../classes/Bank";
import { User } from "../classes/User";
import express from "express";
import { BankModel } from "../models/bankModel";
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
