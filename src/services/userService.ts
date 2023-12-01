import { User } from "../classes/user";
import { UserModel } from "../models/userModel";

export async function addUser(userName: string, contactInfo: string) {
  const user = await UserModel.create(new User(userName, contactInfo));
  console.log(`added user ${user}`);
}

export async function getUsers() {
  const users = await UserModel.find({});
  console.log(users);
}

export async function updateUser(userId: string, name: string) {
  const user = await UserModel.findById(userId);
  const output = await user?.updateOne({ name: name });
  console.log(output);
}
