import { CreditScoreModel } from "../models/creditScoreModel";

export const getCreditScores = () => CreditScoreModel.find();
export const getCreditScoreByUserEmail = (email: string) =>
  CreditScoreModel.findOne({ email });

export const getCreditScoreByUserId = (id: string) =>
  CreditScoreModel.findOne({ id });

export const createCreditScore = async (values: Record<string, any>) => {
  const creditScore = await CreditScoreModel.create(values);
  return creditScore.toObject();
};

export const updateCreditScoreByUserId = (
  id: string,
  values: Record<string, any>
) => {
  CreditScoreModel.findOneAndUpdate({ id }, values);
};

export const deleteCreditScoreByUserId = (id: string) =>
  CreditScoreModel.findOneAndDelete({
    id,
  });
