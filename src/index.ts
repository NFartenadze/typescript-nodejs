import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { getUsers, updateUser } from "./services/userService";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI!)
  .then(() => {
    console.log("Connected to MongoDb");
  })
  .catch((error) => {
    console.log(error);
  });
