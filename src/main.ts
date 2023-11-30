// import {
//   connectToMongoDB,
//   disconnectFromMongoDB,
//   insertData,
// } from "./services/connection";

// import * as dotenv from "dotenv";

// dotenv.config();

// export async function main() {
  // const client = await connectToMongoDB();
  // const database = client.db("banking-system");
  // const collection = database.collection("accounts");
  // await insertData(collection, {
  //   example: "exampple",
  // });
  // await disconnectFromMongoDB();
// }

// Create a bank instance
// const bank = new Bank();

// // Create users
// const user1 = new User("1", "John Doe", "john@example.com");
// const user2 = new User("2", "Jane Doe", "jane@example.com");

// // Create accounts for users
// const account1 = new Account(user1, 1000); // Initial balance: $1000
// const account2 = new Account(user2, 500); // Initial balance: $500

// // Create users and accounts in the bank
// bank.createUser(user1);
// bank.createAccount(account1);

// bank.createUser(user2);
// bank.createAccount(account2);

// console.log(bank);
