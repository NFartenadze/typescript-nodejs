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

export async function getUser(field: Record<keyof User, string>) {
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

export async function updateUser(
  field: Record<keyof User, string>,
  updateFields: Record<keyof User, any>
) {
  try {
    const user = await UserModel.findOne(field);
    if (!user) {
      throw new Error(`Couldn't find user with ${field}`);
    }
    await UserModel.updateOne(field, updateFields);
    console.log("User updated successfully:", user);
  } catch (error: any) {
    throw new Error("Error updating user");
  }
}

export async function deleteUser(field: Record<keyof User, string>) {
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
