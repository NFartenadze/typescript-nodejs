import express from "express";

import { CreditCardModel } from "../models/creditCardModel";
import logger from "../helpers/logger";

export const getAllCreditCards = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const creditCards = await CreditCardModel.find();
    return res.status(200).json(creditCards);
  } catch (error) {
    logger.error(error);
    return res.sendStatus(400);
  }
};
export const createNewCreditCard = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    console.error(req.body);
    const creditCard = await CreditCardModel.create(req.body);
    return res.status(201).json(creditCard);
  } catch (error) {
    logger.error(error);
    return res.sendStatus(400);
  }
};

export const getSpecificCreditCard = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { userId } = req.params;
    const creditCard = await CreditCardModel.findOne({ user: userId });
    return res.status(200).json(creditCard);
  } catch (error) {
    logger.error(error);
    return res.sendStatus(400);
  }
};
export const deleteCreditCard = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const creditCard = await CreditCardModel.findOne({ _id: id });
    if (!creditCard) {
      return res.status(404).json({ message: "Credit Card not found" });
    }
    const deletedCreditCard = await CreditCardModel.findOneAndDelete({
      _id: id,
    });
    return res.json(deletedCreditCard);
  } catch (error) {
    logger.error(error);
    return res.sendStatus(400);
  }
};

export const updateCreditCard = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { userId } = req.params;
    const updatedCreditCard = await CreditCardModel.findOneAndUpdate(
      { user: userId },
      req.body,
      { new: true }
    );
    return res.json(updatedCreditCard);
  } catch (error) {
    logger.error(error);
    return res.sendStatus(400);
  }
};
