import * as dotenv from "dotenv";
import mongoose from "mongoose";
import {
  createBank,
  getBank,
  getBanks,
  deleteBank,
} from "../services/bankService";
import { Bank } from "../classes/Bank";

describe.only("Bank Service Integration Tests", () => {
  dotenv.config();

  const payload = new Bank("swedish");
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

  test("successful bank creation", async () => {
    await createBank(payload);

    const bank = await getBank({ name: "swedish" });
    expect(bank).toBeDefined;
  });

  test("successful retrieval of banks", async () => {
    await createBank(payload);

    const banks = await getBanks();
    expect(banks).toHaveLength(1);
  });

  test("successful retrieval of a single bank", async () => {
    await createBank(payload);

    const retreivedBank = await getBank({ name: "swedish" });
    expect(retreivedBank).toBeDefined;
  });

  test("successful deletion of an bank", async () => {
    await createBank(payload);

    await deleteBank({ name: "swedish" });

    //in this case getAccount will throw error but test will pass. retrieved bank will be undefined
    const retreivedBank = await getBank({ name: "swedish" });
    expect(retreivedBank).toBeUndefined;
  });
});
