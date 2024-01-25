import { UserModel } from "../models/userModel";
import { User } from "../classes/User";

export const getUsers = () => UserModel.find();
export const getUserByEmail = (email: string) => UserModel.findOne({ email });
export const getUserById = (id: string) => UserModel.findById(id);

export const createUser = async (user: User) => {
  const userModel = new UserModel(user);
  const savedUser = await userModel.save();
  return savedUser.toObject();
};

export const deleteUserById = (id: string) =>
  UserModel.findOneAndDelete({
    id,
  });

export const updateUserById = (id: string, values: Record<string, any>) => {
  UserModel.findByIdAndUpdate(id, values);
};
