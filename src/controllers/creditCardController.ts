import express from "express";

import { CreditCardModel } from "../models/creditCardModel";

export const getAllCreditCards = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const creditCards = await CreditCardModel.find();
    return res.status(200).json(creditCards);
  } catch (error) {
    console.log(error);
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
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getSpecificCreditCard = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { userId } = req.params;
    const creditCard = await CreditCardModel.findOne({ userId });
    return res.status(200).json(creditCard);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
export const deleteCreditCard = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { userId } = req.params;

    const creditCard = await CreditCardModel.findOne({ userId });
    if (!creditCard) {
      return res.status(404).json({ message: "User not found" });
    }
    console.log(creditCard);
    const deletedCreditCard = await CreditCardModel.findOneAndDelete({
      userId,
    });
    return res.json(deletedCreditCard);
  } catch (error) {
    console.log(error);
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
      { userId },
      req.body,
      { new: true }
    );
    return res.json(updatedCreditCard);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
