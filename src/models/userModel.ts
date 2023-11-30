import { Schema, model } from "mongoose";

interface IUser {
  name: string;
  contactInfo: string;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    contactInfo: { type: String, required: true },
  },
  {
    collection: "users",
  }
);

const User = model<IUser>("User", userSchema);

export { User };
