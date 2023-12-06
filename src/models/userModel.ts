import { Schema, model } from "mongoose";
import { User } from "../classes/user";

type UserSchema = User;

const userSchema = new Schema<UserSchema>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    accountNumber: { type: String, required: true, unique: true },
  },
  {
    collection: "users",
  }
);

const UserModel = model<UserSchema>("User", userSchema);

export { UserModel };
