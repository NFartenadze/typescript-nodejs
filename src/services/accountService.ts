import mongoose, { FilterQuery } from "mongoose";
import { Account } from "../classes/Account";
import { Transaction } from "../classes/Transaction";
import { User } from "../classes/User";

import { AccountModel } from "../models/accountModel";
import { Filter } from "mongodb";

type FieldValue = User | number | Array<Transaction>;

export async function createAccount(account: Account) {
  try {
    const acc = await AccountModel.create(account);
    if (!acc) {
      throw new Error("error creating account");
    }
    console.log(`added account ${account}`);
    return acc;
  } catch (error: any) {
    console.log(error, { message: error.message });
  }
}

export async function getAccounts() {
  try {
    const accounts = await AccountModel.find({});
    if (accounts.length === 0) {
      throw new Error(`Couldn't find accounts`);
    }
    return accounts;
  } catch (error: any) {
    console.error(error);
  }
}

export async function getAccount(field: FilterQuery<Account>) {
  try {
    const account = await AccountModel.findOne(field);
    if (!account) {
      throw new Error(`Couldn't find account with ${field}`);
    }
    return account;
  } catch (error: any) {
    console.error(error);
  }
}

export async function updateAccount(
  field: FilterQuery<Account>,
  updateFields: Record<keyof Account, FieldValue>
) {
  try {
    const account = await AccountModel.findOne(field);
    if (!account) {
      throw new Error(`Account with ${field} not found`);
    }
    await AccountModel.updateOne(field, updateFields);
    console.log("Account updated successfully:", account);
  } catch (error: any) {
    console.log(error);
    throw new Error("Error Updating Account");
  }
}

export async function deleteAccount(field: FilterQuery<Account>) {
  try {
    const account = await AccountModel.findOne(field);

    if (!account) {
      throw new Error(`Account with ${field} not found`);
    }
    await AccountModel.deleteOne(field);
    console.log(`deleted account with ${field}`);
  } catch (error: any) {
    console.log(error);
    throw new Error("Error Deleting Account");
  }
}
