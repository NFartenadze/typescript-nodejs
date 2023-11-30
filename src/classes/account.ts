import { WithDraw } from "./withdraw";
import { Deposit } from "./deposit";
import { User } from "./user";

interface IAccount {
  owner: User;
  balance: number;
  // transactionHistory: Array<WithDraw | Deposit>;
}
class Account implements IAccount {
  owner: User;
  balance: number;
  // transactionHistory: Array<WithDraw | Deposit> = [];

  constructor(owner: User, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(deposit: Deposit) {
    this.balance += deposit.amount;
    // this.transactionHistory.push(deposit);
  }

  withdraw(withdraw: WithDraw) {
    const checkAmountToBalance = withdraw.amount > this.balance;
    if (checkAmountToBalance) {
      throw new Error("Not Enough Money On Balance");
    }
    this.balance -= withdraw.amount;
    console.log(`Withdrawn ${withdraw.amount}. New balance: ${this.balance}`);
    // this.transactionHistory.push(withdraw);
  }
  getBalance(): number {
    return this.balance;
  }
}

export { Account };
