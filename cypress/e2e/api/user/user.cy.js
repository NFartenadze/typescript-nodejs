/// <reference types="cypress" />
import * as dotenv from "dotenv";
import mongoose from "mongoose";

describe("User Service Integration its", () => {
  dotenv.config();

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

  it("successful User creation", async () => {
    cy.request("GET", "http://localhost:3000/users/65b3a65ab5072630cb7d6fcd");
  });

  // it("successful retrieval of Users", async () => {
  //   await createUser(payload);

  //   const users = await getUsers();
  //   expect(users).toHaveLength(1);
  // });

  // it("successful deletion of an User", async () => {
  //   await createUser(payload);

  //   await deleteUser({ firstName: "john" });

  //   //in this case getUser will throw error but it will pass. retrieved User will be undefined
  //   const retreivedUser = await getUser({ firstName: "john" });
  //   expect(retreivedUser).toBeUndefined;
  // });

  // it("successful update of an User", async () => {
  //   await createUser(payload);

  //   const updateFields = { lastName: "updatedLastName" };
  //   await updateUser({ firstName: "john" }, updateFields);

  //   const updatedUser = await getUser({ firstName: "john" });
  //   expect(updatedUser?.lastName).toEqual(updateFields.lastName);
  //   console.log(updatedUser);
  // });
});
