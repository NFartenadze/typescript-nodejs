import express from "express";

import { createUser, deleteUserById, getUserById, getUsers } from "../db/users";
import { User } from "../classes/User";

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
export const createNewUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const user = await createUser(req.body as User);
    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

// export const deleteUsers = async (
//   req: express.Request,
//   res: express.Response
// ) => {
//   try {
//     const { id } = req.params;
//     const deletedUser = await deleteUserById(id);
//     return res.json(deletedUser);
//   } catch (error) {
//     console.log(error);
//     return res.sendStatus(400);
//   }
// };

// export const updateUser = async (
//   req: express.Request,
//   res: express.Response
// ) => {
//   try {
//     const { id } = req.params;

//     const { firstName } = req.body;
//     if (!firstName) {
//       return res.sendStatus(400);
//     }
//     const user = await getUserById(id);
//     user!.firstName = firstName;

//     return res.status(200).json(user).end();
//   } catch (error) {
//     console.log(error);
//     return res.sendStatus(400);
//   }
// };
