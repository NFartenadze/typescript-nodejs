import express from "express";

import {
  createLoan,
  deleteLoanByUserId,
  getLoanByUserId,
  getLoans,
} from "../db/loan";

export const getAllLoans = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const loans = await getLoans();
    return res.status(200).json(loans);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
export const getSpecificLoan = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const loans = await getLoanByUserId(id);
    return res.status(200).json(loans);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const createNewLoan = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    console.error(req.body);
    const loan = await createLoan(req.body);
    return res.status(201).json(loan);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteLoan = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { userId } = req.params;

    const loan = await getLoanByUserId(userId);
    if (!loan) {
      return res.status(404).json({ message: "User not found" });
    }
    console.log(loan);
    const deletedLoan = await deleteLoanByUserId(userId);
    return res.json(deletedLoan);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
