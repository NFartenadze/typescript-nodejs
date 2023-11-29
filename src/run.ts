import { Account } from "./account";
import { Deposit } from "./deposit";
import { WithDraw } from "./withdraw";

const acc = new Account();
const deposit = new Deposit(100);
const withdraw = new WithDraw(50);

acc.deposit(deposit);
acc.withdraw(withdraw);
console.log(acc.balance);
console.log(acc.transactionHistory);
export { acc };
