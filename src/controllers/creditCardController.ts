import express from "express";

import {
  createCreditCard,
  deleteCreditCardByUserId,
  getCreditCards,
} from "../db/creditCard";

export const getAllCreditCards = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const creditCards = await getCreditCards();
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
    const creditCard = await createCreditCard(req.body);
    return res.status(201).json(creditCard);
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
    const { id } = req.params;
    const deletedCreditCard = await deleteCreditCardByUserId(id);
    return res.json(deletedCreditCard);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
