import { Schema, model } from "mongoose";
import { User } from "../classes/User";

type UserSchema = User;

export const userSchema = new Schema<UserSchema>(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    phoneNumber: { type: String },
    address: { type: String },
    dateOfBirth: { type: Date },
  },
  {
    collection: "users",
  }
);

const UserModel = model<UserSchema>("User", userSchema);

export { UserModel };
