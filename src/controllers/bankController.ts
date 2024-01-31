import express from "express";
import {
  createBank,
  deleteBankByName,
  getBankByName,
  getBanks,
} from "../db/bank";

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

export const getSpecificBank = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { name } = req.params;
    const bank = await getBankByName(name);
    return res.status(201).json(bank);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteBank = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { name } = req.params;
    console.log(name);
    // Check if bank exists
    const bank = await getBankByName(name);
    if (!bank) {
      return res.status(404).json({ message: "User not found" });
    }
    console.log(bank);
    const deletedUser = await deleteBankByName(name);
    return res.json(deletedUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
