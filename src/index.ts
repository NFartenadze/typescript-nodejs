import express from "express";
import mongoose from "mongoose";
// import { main } from "./main";
import * as dotenv from "dotenv";
import { User } from "./models/userModel";
import { User as UserClass } from "./classes/user";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

// get users from database
app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//insert user to database
app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
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

async function addUser() {
  const user = await User.create(new UserClass("bob", "california"));
  console.log("added user");
}

addUser();
