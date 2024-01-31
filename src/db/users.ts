import { UserModel } from "../models/userModel";

export const getUsers = () => UserModel.find();
export const getUserById = (id: string) => UserModel.findById(id);

export const createUser = async (values: Record<string, any>) => {
  const userModel = new UserModel(values);
  const savedUser = await userModel.save();
  return savedUser.toJSON();
};

export const deleteUserById = (id: string) =>
  UserModel.findOneAndDelete({
    _id: id,
  });

export const updateUserById = (id: string, values: Record<string, any>) => {
  UserModel.findByIdAndUpdate(id, values);
};

export const clearUserCollection = async () => {
  await UserModel.deleteMany({});
};
