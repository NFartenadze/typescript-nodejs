import { Account } from "./account";
import { Deposit } from "./deposit";
import { WithDraw } from "./withdraw";
import { connectToMongoDB, disconnectFromMongoDB } from "./services/connection";

const acc = new Account("Bob", "Smith");
const deposit = new Deposit(100);
const withdraw = new WithDraw(50);

acc.deposit(deposit);
acc.withdraw(withdraw);
console.log(acc.balance);
console.log(acc.transactionHistory);
export { acc };

async function main() {
  const client = await connectToMongoDB();
  const database = client.db("banking-system");
  const collection = database.collection("accounts");

  const dataToInsert = {
    firstName: "bob",
    lastName: "williams",
    transactionHistory: [new WithDraw(20), new Deposit(20)],
    balance: 3000,
  };
  // const insertResult = await insertData(collection, dataToInsert);
  // console.log("Inserted document ID:", insertResult.insertedId);

  await disconnectFromMongoDB();
}
