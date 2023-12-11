import mongoose from "mongoose";
import { Account } from "../classes/Account";
import { Transaction } from "../classes/Transaction";
import { User } from "../classes/User";
import {
  CreateError,
  DeleteError,
  NotFoundError,
  UpdateError,
} from "../errors/Error";
import { AccountModel } from "../models/AccountModel";

type FieldValue = User | number | Array<Transaction>;

export async function createAccount(account: Account) {
  try {
    const acc = await AccountModel.create(account);
    if (!acc) {
      throw new CreateError("error creating account");
    }
    console.log(`added account ${account}`);
  } catch (error: any) {
    console.log(error, { message: error.message });
  }
}

export async function getAccounts() {
  try {
    const accounts = await AccountModel.find({});
    if (accounts.length === 0) {
      throw new NotFoundError(`Couldn't find accounts`);
    }
    return accounts;
  } catch (error: any) {
    console.error(error);
  }
}

export async function getAccount(field: Record<keyof Account, FieldValue>) {
  try {
    const account = await AccountModel.findOne(field);
    if (!account) {
      throw new NotFoundError(`Couldn't find account with ${field}`);
    }
    return account;
  } catch (error: any) {
    console.error(error);
  }
}

export async function updateAccount(
  field: Record<keyof Account, FieldValue>,
  updateFields: Record<keyof Account, FieldValue>
) {
  try {
    const account = await AccountModel.findOne(field);
    if (!account) {
      throw new NotFoundError(`Account with ${field} not found`);
    }
    await AccountModel.updateOne(field, updateFields);
    console.log("Account updated successfully:", account);
  } catch (error: any) {
    console.log(error);
    throw new UpdateError("Error Updating Account");
  }
}

export async function deleteAccount(field: Record<keyof Account, FieldValue>) {
  try {
    const account = await AccountModel.findOne(field);

    if (!account) {
      throw new NotFoundError(`Account with ${field} not found`);
    }
    await AccountModel.deleteOne(field);
    console.log(`deleted account with ${field}`);
  } catch (error: any) {
    console.log(error);
    throw new DeleteError("Error Deleting Account");
  }
}
