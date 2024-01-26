import express from "express";

import {
  clearUserCollection,
  createUser,
  deleteUserById,
  getUserById,
  getUsers,
} from "../db/users";

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
    console.error(req.body);
    const user = await createUser(req.body);
    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const deletedUser = await deleteUserById(id);
    return res.json(deletedUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteAllUsers = async () => {
  try {
    await clearUserCollection();
  } catch (error) {
    console.log(error);
    return error;
  }
};
