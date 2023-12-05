import { User } from "../classes/user";
import { UserModel } from "../models/userModel";

export async function createUser(user: User) {
  try {
    await UserModel.create(user);
    console.log(`added user ${user}`);
  } catch (error: any) {
    console.log(error, { message: error.message });
  }
}

export async function getUsers() {
  try {
    const users = await UserModel.find({});
    console.log(users);
    return users;
  } catch (error: any) {
    console.log(error, { message: error.message });
  }
}

export async function getUser(field: Record<keyof User, string>) {
  try {
    const user = await UserModel.findOne(field);
    if (!user) {
      console.log(`Couldn't find user with ${field}`);
      return;
    }
    console.log(user);
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
      console.log(`User with ${field} not found`);
      return;
    }
    await UserModel.updateOne(field, updateFields);
    console.log("User updated successfully:", user);
  } catch (error: any) {
    console.error(error, error.message);
  }
}

export async function deleteUserById(userId: string) {
  try {
    const user = await UserModel.findById(userId);

    if (!user) {
      console.log(`User with id ${userId} not found`);
      return;
    }
    await UserModel.deleteOne({ _id: userId });
    console.log(`deleted user with id: ${userId}`);
  } catch (error: any) {
    console.log(error, { message: error.message });
  }
}

export async function deleteUser(field: Record<keyof User, string>) {
  try {
    const user = await UserModel.findOne(field);

    if (!user) {
      console.log(`User with ${field} not found`);
      return;
    }
    await UserModel.deleteOne(field);
    console.log(`deleted user with ${field}`);
  } catch (error: any) {
    console.log(error, { message: error.message });
  }
}
