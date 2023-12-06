import { Account } from "./account";
import { Transaction } from "./transaction";
import { User } from "./user";

class Bank {
  name: string;
  accounts: Array<Account> = [];
  users: Array<User> = [];

  constructor(name: string) {
    this.name = name;
  }

  createUser(user: User): void {
    this.users.push(user);
    console.log(`User created with name ${user.name}`);
  }

  getTotalBankBalance(): number {
    return this.accounts.reduce(
      (total, account) => total + account.checkBalance(),
      0
    );
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

  checkBalance(account: Account): void {
    if (!this.accounts.includes(account)) {
      console.log("Account not found");
      return;
    }

    const balance = account.checkBalance();
    console.log(`Account balance: ${balance}`);
  }
}

export { Bank };
