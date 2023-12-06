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
      switch (transaction.type) {
        case "transfer":
          this.transfer(account, transaction.amount);
          break;
        case "receive":
          this.receive(account, transaction.amount);
          break;
        case "withdraw":
          this.withdraw(new WithDraw(transaction.amount));
          break;
        case "deposit":
          this.deposit(new Deposit(transaction.amount));
          break;
        default:
          console.log("Invalid transaction type");
          return;
      }
      this.transactionHistory.push(transaction);
      console.log(
        `Transaction recorded: ${transaction.getTransactionDetails()}`
      );
    } catch (error: any) {
      console.log(`Transaction failed: ${error.message}`);
    }
  }

  generateMonthlyStatement(): string {
    const currentDate = new Date();
    const startDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const endDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );

    const filteredTransactions = this.transactionHistory.filter(
      (transaction) =>
        transaction.performedAt >= startDate &&
        transaction.performedAt <= endDate
    );

    let statement = `Monthly Statement - ${startDate.toDateString()} to ${endDate.toDateString()}\n`;
    statement += `Account Owner: ${this.owner.getName()}\n\n`;

    if (filteredTransactions.length === 0) {
      statement += "No transactions for this period.\n";
    } else {
      statement += "Transaction Details:\n";
      for (const transaction of filteredTransactions) {
        statement += `${transaction.getTransactionDetails()}\n`;
      }
    }

    statement += `\nEnding Balance: ${this.checkBalance()}\n`;

    return statement;
  }

  transfer(toAccount: Account, amount: number): void {}

  receive(fromAccount: Account, amount: number): void {}

  deposit(deposit: Deposit) {
    this.balance += deposit.amount;
    console.log(
      `Deposit of ${
        deposit.amount
      } successful. New balance: ${this.checkBalance()}`
    );
  }

  withdraw(withdraw: WithDraw) {
    const checkAmountToBalance = withdraw.amount > this.balance;
    if (checkAmountToBalance) {
      throw new Error("Not Enough Money On Balance");
    }
    this.balance -= withdraw.amount;
    console.log(
      `Withdrawn ${withdraw.amount}. New balance: ${this.checkBalance}`
    );
  }
  checkBalance(): number {
    return this.balance;
  }
}

export { Account };
