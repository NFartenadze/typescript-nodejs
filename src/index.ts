import * as dotenv from "dotenv";
import express from "express";
import { errorHandler } from "./middleware/errorHandler";
import mongoose from "mongoose";
import router from "./router";
import bodyParser from "body-parser";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI!)
  .then(() => {
    const app = express();

    app.use(errorHandler);
    app.use(bodyParser.json());
    app.use("/api", router());
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
    console.log("Connected to MongoDb");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
