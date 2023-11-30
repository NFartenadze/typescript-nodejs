"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// async function main() {
//   const client = await connectToMongoDB();
//   const database = client.db("banking-system");
//   const collection = database.collection("accounts");
//   await disconnectFromMongoDB();
// }
const user_1 = require("./classes/user");
const account_1 = require("./classes/account");
const bank_1 = require("./classes/bank");
// Create a bank instance
const bank = new bank_1.Bank();
// Create users
const user1 = new user_1.User("1", "John Doe", "john@example.com");
const user2 = new user_1.User("2", "Jane Doe", "jane@example.com");
// Create accounts for users
const account1 = new account_1.Account(user1, 1000); // Initial balance: $1000
const account2 = new account_1.Account(user2, 500); // Initial balance: $500
// Create users and accounts in the bank
bank.createUser(user1);
bank.createAccount(account1);
bank.createUser(user2);
bank.createAccount(account2);
//# sourceMappingURL=main.js.map