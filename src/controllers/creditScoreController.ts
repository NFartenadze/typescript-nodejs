import express from "express";

import {
  createCreditScore,
  deleteCreditScoreByUserId,
  getCreditScores,
} from "../db/creditScore";

export const getAllCreditScores = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const creditScores = await getCreditScores();
    return res.status(200).json(creditScores);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
export const createNewCreditScore = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    console.error(req.body);
    const creditScore = await createCreditScore(req.body);
    return res.status(201).json(creditScore);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteCreditScore = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const deletedCreditScore = await deleteCreditScoreByUserId(id);
    return res.json(deletedCreditScore);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
