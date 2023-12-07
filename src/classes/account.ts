import { User } from "./user";
import { Transaction } from "./transaction";

class Account {
  constructor(
    public accountNumber: string,
    public owner: User,
    public balance = 0,
    public transactionHistory: Transaction[]
  ) {
    this.transactionHistory = [];
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
          this.withdraw(transaction.amount);
          break;
        case "deposit":
          this.deposit(transaction.amount);
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
    statement += `Account Owner: ${this.owner.getPropertyValue(
      "firstName"
    )}\n\n`;

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

  transfer(toAccount: Account, amount: number): void {
    if (toAccount.balance < amount) {
      throw new Error("Not Enough Money On Balance");
    }
    this.balance -= amount;
    toAccount.balance += amount;
  }

  receive(fromAccount: Account, amount: number): void {
    if (fromAccount.balance < amount) {
      throw new Error("Not Enough Money On Balance");
    }
    fromAccount.balance -= amount;
    this.balance += amount;
  }

  deposit(amount: number) {
    this.balance += amount;
    console.log(
      `Deposit of ${amount} successful. New balance: ${this.checkBalance()}`
    );
  }

  withdraw(amount: number) {
    if (amount > this.balance) {
      throw new Error("Not Enough Money On Balance");
    }
    this.balance -= amount;
    console.log(`Withdrawn ${amount}. New balance: ${this.checkBalance}`);
  }
  checkBalance(): number {
    return this.balance;
  }
}

export { Account };
