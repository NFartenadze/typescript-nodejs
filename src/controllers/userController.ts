import express from "express";
import { UserModel } from "../models/userModel";

export const getAllUsers = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const users = await UserModel.find();
    if (!users) {
      return res.status(404).json({ message: "No Users Found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
export const getSpecificUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findOne({ _id: id });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(user);
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
    const user = await UserModel.create(req.body);
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
    console.log(id);
    // Check if user exists
    const user = await UserModel.findOne({ _id: id });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    console.log(user);

    const deletedUser = await UserModel.findOneAndDelete({ _id: id });
    return res.json(deletedUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    return res.status(201).json(updateUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
