import {
  Collection,
  MongoClient,
  InsertOneResult,
  UpdateResult,
  DeleteResult,
} from "mongodb";

const uri =
  "mongodb+srv://farnick1148:o1vvfQtCYh4ehKJK@cluster0.d9r34ci.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

export async function connectToMongoDB(): Promise<MongoClient> {
  await client.connect();
  console.log("Connected to MongoDB");
  return client;
}

export async function disconnectFromMongoDB() {
  await client.close();
}

export async function insertData(
  collection: Collection,
  data: Record<string, any>
): Promise<InsertOneResult> {
  return collection.insertOne(data);
}

export async function deleteData(
  collection: Collection,
  filter: Record<string, any>
): Promise<DeleteResult> {
  return collection.deleteOne(filter);
}
