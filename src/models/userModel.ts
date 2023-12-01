import { Schema, model } from "mongoose";
import { User } from "../classes/user";

type UserSchema = User;

const userSchema = new Schema<UserSchema>(
  {
    name: { type: String, required: true },
    contactInfo: { type: String, required: true },
  },
  {
    collection: "users",
  }
);

const UserModel = model<UserSchema>("User", userSchema);

export { UserModel };
