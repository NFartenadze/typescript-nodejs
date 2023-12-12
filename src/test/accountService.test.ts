// tests/integration/accountService.test.ts
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import {
  createAccount,
  getAccounts,
  getAccount,
} from "../services/accountService";
import { Account } from "../classes/Account";
import { User } from "../classes/User";

describe("Account Service Integration Tests", () => {
  dotenv.config();

  const user = new User(
    "bob",
    "smith",
    "smith@gmail.com",
    "12312312",
    "new york",
    new Date("13/09/23")
  );

  const payload = new Account(user, 2000, []);

  beforeAll(async () => {
    await mongoose
      .connect(process.env.MONGODB_URI!)
      .then(() => console.log("Connected to mongodb"))
      .catch((error) => {
        console.log(error);
      });
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  afterEach(async () => {
    await mongoose.connection.db.dropDatabase();
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

  //   test("successful retrieval of a single account", async () => {
  //     const createdAccount = await createAccount(payload);

  //     const retrievedAccount = await getAccount({
  //       owner: user,
  //     });
  //     expect(retrievedAccount).toBeDefined();
  //   });
});
