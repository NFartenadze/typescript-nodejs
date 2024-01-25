import { Schema, model } from "mongoose";
import { User } from "../classes/User";

import { creditCardSchema } from "./creditCardModel";
import { creditScoreSchema } from "./creditScoreModel";

type UserSchema = User;

export const userSchema = new Schema<UserSchema>(
  {
    id: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    phoneNumber: { type: String },
    address: { type: String },
    dateOfBirth: { type: Date },
    creditCard: { type: creditCardSchema },
    creditScore: { type: creditScoreSchema},
  },
  {
    collection: "users",
  }
);

const UserModel = model<UserSchema>("User", userSchema);

export { UserModel };
