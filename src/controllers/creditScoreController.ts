import express from "express";

import {
  createCreditScore,
  deleteCreditScoreByUserId,
  getCreditScoreByUserId,
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

export const getSpecificCreditScore = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { CreditScoreId } = req.params;
    const creditScores = await getCreditScoreByUserId(CreditScoreId);
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
    console.log(id);
    // Check if CreditScore exists
    const creditScore = await getCreditScoreByUserId(id);
    if (!creditScore) {
      return res.status(404).json({ message: "CreditScore not found" });
    }
    console.log(creditScore);

    const deletedCreditScore = await deleteCreditScoreByUserId(id);
    return res.json(deletedCreditScore);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
