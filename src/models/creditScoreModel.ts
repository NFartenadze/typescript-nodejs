import { Schema, model } from "mongoose";
import { userSchema } from "./userModel";
import { CreditScore } from "../classes/CreditScore";

type CreditScoreSchema = CreditScore;

export const creditScoreSchema = new Schema<CreditScoreSchema>(
  {
    user: { type: userSchema },
    score: { type: Number },
  },
  {
    collection: "credit-score",
  }
);

const CreditScoreModel = model<CreditScoreSchema>("Bank", creditScoreSchema);

export { CreditScoreModel };
