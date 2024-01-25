import { Schema, model } from "mongoose";
import { userSchema } from "./userModel";
import { CreditScore } from "../classes/CreditScore";
import { User } from "../classes/User";

type CreditScoreSchema = CreditScore;

export const creditScoreSchema = new Schema<CreditScoreSchema>(
  {
    // user: { type: User},
    score: { type: Number },
  },
  {
    collection: "credit-score",
  }
);

const CreditScoreModel = model<CreditScoreSchema>(
  "CreditScore",
  creditScoreSchema
);

export { CreditScoreModel };
