import { Account } from "./account";
import { Deposit } from "./deposit";
import { Transaction } from "./transaction";
import { User } from "./user";
import { WithDraw } from "./withdraw";

class Bank {
  private accounts: Array<Account> = [];
  private users: Array<User> = [];
  private transactions: Array<Transaction> = [];

  createUser(user: User): void {
    this.users.push(user);
    console.log(`User created with ID ${user.userId}`);
  }

  createAccount(account: Account): void {
    if (!this.users.includes(account.owner)) {
      console.log("User not found. Please create a user first.");
      return;
    }

    //check if account exists
    if (!this.accounts.includes(account)) {
      this.accounts.push(account);
      console.log(`Account created for ${account.owner}`);
    } else {
      console.log("Account already exists");
    }
  }

  executeTransaction(account: Account, transaction: Transaction): void {
    if (!this.accounts.includes(account)) {
      console.log("Account not found");
      return;
    }

    try {
      if (transaction.type === "deposit") {
        account.deposit(new Deposit(transaction.amount));
        console.log(
          `Deposit of ${
            transaction.amount
          } successful. New balance: ${account.getBalance()}`
        );
      } else if (transaction.type === "withdraw") {
        account.withdraw(new WithDraw(transaction.amount));
        console.log(
          `Withdrawal of ${
            transaction.amount
          } successful. New balance: ${account.getBalance()}`
        );
      } else {
        console.log("Invalid transaction type");
      }

      this.transactions.push(transaction);
      console.log(
        `Transaction recorded: ${transaction.getTransactionDetails()}`
      );
    } catch (error: any) {
      console.log(`Transaction failed: ${error.message}`);
    }
  }

  checkBalance(account: Account): void {
    if (!this.accounts.includes(account)) {
      console.log("Account not found");
      return;
    }

    const balance = account.getBalance();
    console.log(`Account balance: ${balance}`);
  }
}

export { Bank };
