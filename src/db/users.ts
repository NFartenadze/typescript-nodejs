// i am planning to extract model methods into readable functions and move them in db folder with their relative names. it will make controller functions simpler

// import { UserModel } from "../models/userModel";

// export const getUsers = () => UserModel.find();
// export const getUserByEmail = (email: string) => UserModel.findOne({ email });

// export const getUSerBySessionToken = (sessionToken: string) =>
//   UserModel.findOne({
//     "authentication.sessionToken": sessionToken,
//   });

// export const getUserById = (id: string) => UserModel.findById(id);

// export const createUser = (values: Record<string, any>) =>
//   new UserModel(values).save().then((user) => user.toObject());

// export const deleteUserById = (id: string) =>
//   UserModel.findOneAndDelete({
//     _id: id,
//   });

// export const updateUserById = (id: string, values: Record<string, any>) => {
//   UserModel.findByIdAndUpdate(id, values);
// };
