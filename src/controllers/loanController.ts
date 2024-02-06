import express from "express";
import { LoanModel } from "../models/loanModel";
import logger from "../helpers/logger";

export const getAllLoans = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const loans = await LoanModel.find();
    return res.status(200).json(loans);
  } catch (error) {
    logger.error(error);
    return res.sendStatus(400);
  }
};
export const getSpecificLoan = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const loans = await LoanModel.findOne({ _id: id });
    return res.status(200).json(loans);
  } catch (error) {
    logger.error(error);
    return res.sendStatus(400);
  }
};

export const createNewLoan = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    console.error(req.body);
    const loan = await LoanModel.create(req.body);
    return res.status(201).json(loan);
  } catch (error) {
    logger.error(error);
    return res.sendStatus(400);
  }
};

export const deleteLoan = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const loan = await LoanModel.findOne({ _id: id });
    if (!loan) {
      return res.status(404).json({ message: "Loan not found" });
    }
    console.log(loan);
    const deletedLoan = await LoanModel.findOneAndDelete({ _id: id });
    return res.json(deletedLoan);
  } catch (error) {
    logger.error(error);
    return res.sendStatus(400);
  }
};

export const updateLoan = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const updatedLoan = await LoanModel.findByIdAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    return res.status(200).json(updatedLoan);
  } catch (error) {
    logger.error(error);
    return res.sendStatus(400);
  }
};
