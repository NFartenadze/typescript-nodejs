import { WithDraw } from "./withdraw";
import { Deposit } from "./deposit";

class Account {
  balance: number;
  transactionHistory: Array<WithDraw | Deposit> = [];

  constructor(balance = 0) {
    this.balance = balance;
  }

  deposit(deposit: Deposit) {
    this.addAmount(deposit.amount);
    this.transactionHistory.push(deposit);
  }

  withdraw(withdraw: WithDraw) {
    const checkAmountToBalance = withdraw.amount > this.balance;
    if (checkAmountToBalance) {
      throw new Error("Not Enough Money On Balance");
    }
    this.reduceAmount(withdraw.amount);
    this.transactionHistory.push(withdraw);
  }

  addAmount(amount: number) {
    this.balance += amount;
  }

  reduceAmount(amount: number) {
    this.balance -= amount;
  }
}

export { Account };
