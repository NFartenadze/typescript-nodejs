import { Account } from "./Account";
import { CreditCard } from "./CreditCard";
import { User } from "./User";

class Bank {
  accounts: Account[] = [];
  users: User[] = [];

  constructor(public name:
     string) {}

  createUser(user: User): void {
    this.users.push(user);
    console.log(`User created with name ${user.firstName} ${user.lastName}`);
  }

  getUsers(): Array<User> {
    return this.users;
  }
  getAccounts(): Array<Account> {
    return this.accounts;
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

  //credit card functions
  issueCreditCard(user: User, creditLimit: number): CreditCard {
    const creditCard = new CreditCard(
      this.generateCreditCardNumber(),
      creditLimit,
      0,
      user
    );
    user.assignCreditCard(creditCard);
    return creditCard;
  }

  checkCreditScore(user: User): number {
    if (!user.creditScore) {
      console.log("Credit score not available for the user.");
      return -1;
    }

    return user.creditScore.getCreditScore();
  }
  generateCreditCardNumber(): string {
    const getRandomDigit = () => Math.floor(Math.random() * 10);

    let creditCardNumber = "";
    for (let i = 0; i < 16; i++) {
      creditCardNumber += getRandomDigit().toString();
    }

    return creditCardNumber;
  }
}

export { Bank };
