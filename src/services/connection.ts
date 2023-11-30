// import {
//   Collection,
//   MongoClient,
//   InsertOneResult,
//   DeleteResult,
// } from "mongodb";

// import * as dotenv from "dotenv";
// dotenv.config();

// const client = new MongoClient(process.env.MONGODB_URI!);

// export async function connectToMongoDB(): Promise<MongoClient> {
//   await client.connect();
//   console.log("Connected to MongoDB");
//   return client;
// }

// export async function disconnectFromMongoDB() {
//   await client.close();
// }

// export async function insertData(
//   collection: Collection,
//   data: Record<string, any>
// ): Promise<InsertOneResult> {
//   console.log("Added data");
//   return collection.insertOne(data);
// }

// export async function deleteData(
//   collection: Collection,
//   filter: Record<string, any>
// ): Promise<DeleteResult> {
//   return collection.deleteOne(filter);
// }
