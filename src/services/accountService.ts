import { Account } from "../classes/account";
import { User } from "../classes/user";
import { AccountModel } from "../models/accountModel";

export async function createAccount(
  user: User = new User("thomas", "madagascar"),
  balance: number
) {
  try {
    const account = await AccountModel.create(new Account(user, balance));
    console.log(`added account ${account}`);
  } catch (error: any) {
    console.log(error, { message: error.message });
  }
}

export async function getAccounts() {
  try {
    const accounts = await AccountModel.find({});
    console.log(accounts);
  } catch (error: any) {
    console.log(error, { message: error.message });
  }
}

export async function updateAccount(
  accountId: string,
  updateFields: Record<string, any>
) {
  try {
    const acc = await AccountModel.findByIdAndUpdate(accountId, updateFields, {
      new: true,
    });
    console.log("account updated successfully", acc);
  } catch (error: any) {
    console.log(error, { message: error.message });
  }
}
