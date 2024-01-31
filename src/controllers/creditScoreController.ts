import express from "express";
import { CreditScoreModel } from "../models/creditScoreModel";

export const getAllCreditScores = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const creditScores = await CreditScoreModel.find();
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
    const { id } = req.params;
    const creditScores = await CreditScoreModel.findOne({ _id: id });
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
    const creditScore = await CreditScoreModel.create(req.body);
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
    const creditScore = await CreditScoreModel.findOne({ _id: id });
    if (!creditScore) {
      return res.status(404).json({ message: "CreditScore not found" });
    }

    const deletedCreditScore = await CreditScoreModel.findOneAndDelete({
      _id: id,
    });
    return res.json(deletedCreditScore);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateCreditScore = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const creditScores = await CreditScoreModel.findOneAndUpdate(
      { _id: id },
      req.body
    );
    return res.status(200).json(creditScores);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
