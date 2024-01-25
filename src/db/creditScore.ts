import { CreditScoreModel } from "../models/creditScoreModel";

export const getCreditScores = () => CreditScoreModel.find();
export const getCreditScoreByUserEmail = (email: string) =>
  CreditScoreModel.findOne({ email });

export const getCreditScoreByUserId = (id: string) =>
  CreditScoreModel.findOne({ id });

export const deleteCreditScoreByUserId = (id: string) =>
  CreditScoreModel.findOneAndDelete({
    id,
  });

export const updateCreditScoreByUserId = (
  id: string,
  values: Record<string, any>
) => {
  CreditScoreModel.findOneAndUpdate({ id }, values);
};
