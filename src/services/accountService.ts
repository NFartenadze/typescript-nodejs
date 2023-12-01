import { Account } from "../classes/account";
import { User } from "../classes/user";
import { AccountModel } from "../models/accountModel";

export async function addAccount(
  user: User = new User("thomas", "madagascar"),
  balance: number
) {
  const account = await AccountModel.create(new Account(user, balance));
  console.log(`added account ${account}`);
}

export async function getAccounts() {
  const accounts = await AccountModel.find({});
  console.log(accounts);
}

export async function updateAccount(account: Account, balance: number) {
  const acc = await AccountModel.findOneAndUpdate(account.owner, {
    balance: balance,
  });
}
