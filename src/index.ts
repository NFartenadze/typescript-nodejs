import mongoose from "mongoose";
import * as dotenv from "dotenv";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "./services/userService";
import { User } from "./classes/user";

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI!)
  .then(() => {
    console.log("Connected to MongoDb");
    operations();
  })
  .catch((error) => {
    console.log(error);
  });

async function operations() {
  const user = new User("anna", "something");
  // await createUser(user);
  const users = await getUsers();
  // await updateUser("656ed58d9cfd1cd3e677a906", { contactInfo: "example" });
  // await deleteUser("65696494d30ffcdaafed1353");
}
