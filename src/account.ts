import { WithDraw } from "./withdraw";
import { Deposit } from "./deposit";
class Account {
  private balance: number;

  constructor(balance = 0) {
    this.balance = balance;
  }

  deposit({ amount }: Deposit) {
    this.addAmount(amount);
  }

  withdraw({ amount }: WithDraw) {
    const checkAmountToBalance = amount > this.balance;
    if (checkAmountToBalance) {
      throw new Error("Not Enough Money On Balance");
    }
    this.reduceAmount(amount);
  }

  addAmount(amount: number) {
    this.balance += amount;
  }

  reduceAmount(amount: number) {
    this.balance -= amount;
  }
}
