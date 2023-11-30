import { Schema, model } from "mongoose";
import { User } from "../classes/user";

interface IAccount {
  owner: User;
  balance: number;
}
const accountSchema = new Schema<IAccount>({
  owner: { type: User, required: true },
  balance: { type: Number, required: true },
});

const Account = model<IAccount>("Account", accountSchema);

export { Account };
