import express from "express";
import mongoose from "mongoose";
// import { main } from "./main";
import * as dotenv from "dotenv";

const app = express();
const port = 3000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/user", (req, res) => {
  try {
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

// main();

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI!)
  .then(() => {
    console.log("Connected to MongoDb");
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
