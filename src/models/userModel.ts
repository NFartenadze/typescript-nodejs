import { Schema, model } from "mongoose";

interface IUser {
  id: string;
  name: string;
  contactInfo: string;
}

const userSchema = new Schema<IUser>(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    contactInfo: { type: String, required: true },
  },
  {
    collection: "users",
  }
);

const User = model<IUser>("User", userSchema);

export { User };
