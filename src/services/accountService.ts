import { Account } from "../classes/account";
import { AccountModel } from "../models/accountModel";

export async function createAccount(account: Account) {
  try {
    await AccountModel.create(account);
    console.log(`added account ${account}`);
  } catch (error: any) {
    console.log(error, { message: error.message });
  }
}

export async function getAccounts() {
  try {
    const accounts = await AccountModel.find({});
    console.log(accounts);
    return accounts;
  } catch (error: any) {
    console.log(error, { message: error.message });
  }
}

export async function getAccount(field: Record<keyof Account, any>) {
  try {
    const account = await AccountModel.findOne(field);
    if (!account) {
      console.log(`Couldn't find account with ${field}`);
      return;
    }
    console.log(account);
    return account;
  } catch (error: any) {
    console.log(error, { message: error.message });
  }
}

export async function updateAccount(
  field: Record<keyof Account, any>,
  updateFields: Record<keyof Account, any>
) {
  try {
    const account = await AccountModel.findOneAndUpdate(field, updateFields, {
      new: true,
    });
    if (!account) {
      console.log(`Account with ${field} not found`);
      return;
    }
    console.log("Account updated successfully:", account);
  } catch (error: any) {
    console.error(error, error.message);
  }
}

export async function deleteAccount(field: Record<keyof Account, any>) {
  try {
    const account = await AccountModel.findOne(field);

    if (!account) {
      console.log(`Account with ${field} not found`);
      return;
    }
    await AccountModel.deleteOne(field);
    console.log(`deleted account with ${field}`);
  } catch (error: any) {
    console.log(error, { message: error.message });
  }
}

export async function deleteAccountById(accountId: string) {
  try {
    const account = await AccountModel.findById(accountId);
    if (!account) {
      console.log(`Account with ${accountId} not found`);
      return;
    }
    await AccountModel.deleteOne({ _id: accountId });
    console.log(`deleted account with id: ${accountId}`);
  } catch (error: any) {
    console.log(error, { message: error.message });
  }
}
