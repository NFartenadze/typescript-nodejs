import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { Account } from "./classes/Account";
import { getAccount } from "./services/accountService";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI!)
  .then(() => {
    console.log("Connected to MongoDb");
  })
  .catch((error) => {
    console.log(error);
  });
