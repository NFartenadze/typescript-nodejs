import * as dotenv from "dotenv";
import express from "express";
import { errorHandler } from "./middleware/errorHandler";
import mongoose from "mongoose";
import router from "./router";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

app.use(errorHandler);
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGODB_URI!)
  .then(() => {
    console.log("Connected to MongoDb");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use("/", router());

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
