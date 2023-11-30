import { Schema, model } from "mongoose";
import { Account } from "../classes/account";
import { User } from "../classes/user";
import { Transaction } from "../classes/transaction";

interface IBank {
  accounts: Array<Account>;
  users: Array<User>;
  transactions: Array<Transaction>;
}

const bankSchema = new Schema<IBank>({
  accounts: { type: [Account], required: true },
  users: { type: [User], required: true },
  transactions: { type: [Transaction], required: true },
});

const Bank = model<IBank>("Bank", bankSchema);

export { Bank };
