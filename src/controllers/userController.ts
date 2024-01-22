import { FilterQuery } from "mongoose";
import express from "express";

import { User } from "../classes/User";

import { UserModel } from "../models/userModel";

export async function createUser(user: User) {
  try {
    const usr = await UserModel.create(user);
    if (!usr) {
      throw new Error("error creating account");
    }
    console.log(`added user ${user}`);
  } catch (error: any) {
    console.log(error, { message: error.message });
  }
}

export async function getUsers() {
  try {
    const users = await UserModel.find({});
    if (users.length === 0) {
      throw new Error(`Couldn't find users`);
    }
    return users;
  } catch (error: any) {
    console.log(error, { message: error.message });
  }
}

export const getAllUsers = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const users = await getUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export async function getUser(field: FilterQuery<User>) {
  try {
    const user = await UserModel.findOne(field);
    if (!user) {
      throw new Error(`Couldn't find user with ${field}`);
    }
    return user;
  } catch (error: any) {
    console.log(error, { message: error.message });
  }
}

export async function updateUser(field: FilterQuery<User>, updateField: {}) {
  try {
    const user = await UserModel.findOne(field);
    if (!user) {
      throw new Error(`Couldn't find user with ${field}`);
    }
    await UserModel.updateOne(field, updateField);
    console.log("User updated successfully:", user);
  } catch (error: any) {
    console.error(error);
  }
}

export async function deleteUser(field: FilterQuery<User>) {
  try {
    const user = await UserModel.findOne(field);

    if (!user) {
      throw new Error(`Couldn't find user with ${field}`);
    }
    await UserModel.deleteOne(field);
    console.log(`deleted user with ${field}`);
  } catch (error: any) {
    console.log(error, { message: error.message });
  }
}
