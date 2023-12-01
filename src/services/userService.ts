import { User } from "../classes/user";
import { UserModel } from "../models/userModel";

export async function addUser() {
  const user = await UserModel.create(new User("bob", "california"));
  console.log("added user");
}

export async function getUsers() {
  const users = await UserModel.find({});
  console.log(users);
}
