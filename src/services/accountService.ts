import { Account } from "../classes/account";
import { User } from "../classes/user";
import { AccountModel } from "../models/accountModel";

export async function addAccount() {
  const account = await AccountModel.create(
    new Account(new User("billy", "new york"), 2000)
  );
  console.log("added account");
}
