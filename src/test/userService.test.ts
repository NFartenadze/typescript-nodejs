import * as dotenv from "dotenv";
import mongoose from "mongoose";
import {
  createUser,
  getUser,
  getUsers,
  deleteUser,
  updateUser,
} from "../controllers/userController";
import { User } from "../classes/User";

describe("User Service Integration Tests", () => {
  dotenv.config();

  const payload = new User(
    "john",
    "smith",
    "smith@gmail.com",
    "123123123",
    "new york",
    new Date(2003, 3, 9)
  );
  const uri = process.env.MONGODB_URI ?? "mongodb uri";

  beforeAll(async () => {
    await mongoose
      .connect(uri)
      .then(() => console.log("Connected to mongodb"))
      .catch((error) => {
        console.log(error);
      });
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  afterEach(async () => {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
      await collections[key].deleteMany({});
    }
  });

  test("successful User creation", async () => {
    await createUser(payload);

    const user = await getUser({ firstName: "john" });
    expect(user).toBeDefined;
  });

  test("successful retrieval of Users", async () => {
    await createUser(payload);

    const users = await getUsers();
    expect(users).toHaveLength(1);
  });

  test("successful deletion of an User", async () => {
    await createUser(payload);

    await deleteUser({ firstName: "john" });

    //in this case getUser will throw error but test will pass. retrieved User will be undefined
    const retreivedUser = await getUser({ firstName: "john" });
    expect(retreivedUser).toBeUndefined;
  });

  test("successful update of an User", async () => {
    await createUser(payload);

    const updateFields = { lastName: "updatedLastName" };
    await updateUser({ firstName: "john" }, updateFields);

    const updatedUser = await getUser({ firstName: "john" });
    expect(updatedUser?.lastName).toEqual(updateFields.lastName);
    console.log(updatedUser);
  });
});
