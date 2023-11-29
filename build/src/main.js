"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.acc = void 0;
const account_1 = require("./account");
const deposit_1 = require("./deposit");
const withdraw_1 = require("./withdraw");
const connection_1 = require("./services/connection");
const acc = new account_1.Account("Bob", "Smith");
exports.acc = acc;
const deposit = new deposit_1.Deposit(100);
const withdraw = new withdraw_1.WithDraw(50);
acc.deposit(deposit);
acc.withdraw(withdraw);
console.log(acc.balance);
console.log(acc.transactionHistory);
async function main() {
    const client = await (0, connection_1.connectToMongoDB)();
    const database = client.db("banking-system");
    const collection = database.collection("accounts");
    const dataToInsert = {
        firstName: "bob",
        lastName: "williams",
        transactionHistory: [new withdraw_1.WithDraw(20), new deposit_1.Deposit(20)],
        balance: 3000,
    };
    // const insertResult = await insertData(collection, dataToInsert);
    // console.log("Inserted document ID:", insertResult.insertedId);
    await (0, connection_1.disconnectFromMongoDB)();
}
//# sourceMappingURL=main.js.map