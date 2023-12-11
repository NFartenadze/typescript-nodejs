import { User } from "../classes/User";
import { UserModel } from "../models/UserModel";

export async function createUser(user: User) {
  try {
    const usr = await UserModel.create(user);
    if (!usr) {
      throw new CreateError("error creating account");
    }
    console.log(`added user ${user}`);
  } catch (error: any) {
    console.log(error, { message: error.message });
  }
}
