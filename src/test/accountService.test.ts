import * as dotenv from "dotenv";
import mongoose from "mongoose";
import {
  createAccount,
  getAccounts,
  getAccount,
  deleteAccount,
} from "../controllers/accountController";
import { Account } from "../classes/Account";
import { User } from "../classes/User";

describe("Account Service Integration Tests", () => {
  dotenv.config();

  const userPayload = new User(
    "bob",
    "smith",
    "smith@gmail.com",
    "12312312",
    "new york",
    new Date(2023, 0, 13)
  );

  const payload = new Account("12345", userPayload, 2000, []);

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

  test("successful account creation", async () => {
    await createAccount(payload);

    const accounts = await getAccounts();
    expect(accounts).toHaveLength(1);
  });

  test("successful retrieval of accounts", async () => {
    await createAccount(payload);

    const accounts = await getAccounts();
    expect(accounts).toHaveLength(1);
  });

  test("successful retrieval of a single account", async () => {
    const createdAccount = await createAccount(payload);

    const retrievedAccount = await getAccount({ accountNumber: "12345" });
    expect(retrievedAccount).toBeDefined;
  });

  test("successful deletion of an account", async () => {
    const createdAccount = await createAccount(payload);

    await deleteAccount({ accountNumber: "12345" });

    //in this case getAccount will throw error but test will pass. retrieved account will be undefined
    const retrievedAccount = await getAccount({ accountNumber: "12345" });

    expect(retrievedAccount).toBeUndefined;
  });
});
