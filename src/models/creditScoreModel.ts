import { Schema, model } from "mongoose";

export const creditScoreSchema = new Schema(
  {
    user: [{ type: Schema.Types.ObjectId, ref: "User" }],
    score: { type: Number },
  },
  {
    collection: "credit-score",
  }
);

const CreditScoreModel = model("CreditScore", creditScoreSchema);

export { CreditScoreModel };
