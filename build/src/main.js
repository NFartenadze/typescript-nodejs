"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const connection_1 = require("./services/connection");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
async function main() {
    const client = await (0, connection_1.connectToMongoDB)();
    const database = client.db("banking-system");
    const collection = database.collection("accounts");
    await (0, connection_1.insertData)(collection, {
        example: "exampple",
    });
    await (0, connection_1.disconnectFromMongoDB)();
}
exports.main = main;
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