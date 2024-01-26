import express from "express";

import { createLoan, deleteLoanByUserId, getLoans } from "../db/loan";

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
    const { id } = req.params;
    const deletedLoan = await deleteLoanByUserId(id);
    return res.json(deletedLoan);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};


