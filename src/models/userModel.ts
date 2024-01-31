import { Schema, model } from "mongoose";

export const userSchema = new Schema(
  {
    id: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    phoneNumber: { type: String },
    address: { type: String },
    dateOfBirth: { type: String },
    creditCard: { type: Schema.Types.ObjectId, ref: "CreditCard" },
    creditScore: { type: Schema.Types.ObjectId, ref: "CreditScore" },
  },
  {
    collection: "users",
  }
);

const UserModel = model("User", userSchema);

export { UserModel };
