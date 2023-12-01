import { WithDraw } from "./withdraw";
import { Deposit } from "./deposit";
import { User } from "./user";
import { Transaction } from "./transaction";

class Account {
  owner: User;
  balance: number;
  transactionHistory: Array<Transaction> = [];

  constructor(owner: User, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }

  executeTransaction(account: Account, transaction: Transaction): void {
    try {
      if (transaction.type === "deposit") {
        account.deposit(new Deposit(transaction.amount));
        console.log(
          `Deposit of ${
            transaction.amount
          } successful. New balance: ${account.checkBalance()}`
        );
      } else if (transaction.type === "withdraw") {
        account.withdraw(new WithDraw(transaction.amount));
        console.log(
          `Withdrawal of ${
            transaction.amount
          } successful. New balance: ${account.checkBalance()}`
        );
      } else {
        console.log("Invalid transaction type");
      }

      this.transactionHistory.push(transaction);
      console.log(
        `Transaction recorded: ${transaction.getTransactionDetails()}`
      );
    } catch (error: any) {
      console.log(`Transaction failed: ${error.message}`);
    }
  }
  deposit(deposit: Deposit) {
    this.balance += deposit.amount;
  }

  withdraw(withdraw: WithDraw) {
    const checkAmountToBalance = withdraw.amount > this.balance;
    if (checkAmountToBalance) {
      throw new Error("Not Enough Money On Balance");
    }
    this.balance -= withdraw.amount;
    console.log(`Withdrawn ${withdraw.amount}. New balance: ${this.balance}`);
  }
  checkBalance(): number {
    return this.balance;
  }
}

export { Account };
