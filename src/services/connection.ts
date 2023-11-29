import {
  Collection,
  MongoClient,
  InsertOneResult,
  UpdateResult,
  DeleteResult,
} from "mongodb";
import { WithDraw } from "../withdraw";
import { Deposit } from "../deposit";

type Account = {
  firstName: string;
  lastName: string;
  balance: number;
  transactionHistory: Array<WithDraw | Deposit>;
};

const uri =
  "mongodb+srv://farnick1148:o1vvfQtCYh4ehKJK@cluster0.d9r34ci.mongodb.net/?retryWrites=true&w=majority";

const dbName = "banking-system";
const collectionName = "accounts";

const client = new MongoClient(uri);

async function connectToMongoDB(): Promise<MongoClient> {
  await client.connect();
  console.log("Connected to MongoDB");
  return client;
}

async function disconnectFromMongoDB() {
  await client.close();
}

async function insertData(
  collection: Collection,
  data: Record<string, any>
): Promise<InsertOneResult> {
  return collection.insertOne(data);
}

async function deleteData(
  collection: Collection,
  filter: Record<string, any>
): Promise<DeleteResult> {
  return collection.deleteOne(filter);
}

export async function exampleUsage() {
  const client = await connectToMongoDB();

  const database = client.db(dbName);
  const collection = database.collection(collectionName);

  const dataToInsert: Account = {
    firstName: "bob",
    lastName: "williams",
    transactionHistory: [new WithDraw(20), new Deposit(20)],
    balance: 3000,
  };
  // const insertResult = await insertData(collection, dataToInsert);
  // console.log("Inserted document ID:", insertResult.insertedId);

  // const deleteFilter = {};
  // const deleteResult = await deleteData(collection, deleteFilter);
  // console.log("Deleted document count:", deleteResult.deletedCount);

  await disconnectFromMongoDB();
}
