import { Account } from "./Account";
import { Transaction } from "./Transaction";
import { User } from "./User";

class SavingsAccount extends Account {
  constructor(
    accountNumber: string,
    owner: User,
    balance: number = 0,
    transactionHistory: Transaction[] = [],
    public interestRate: number = 0.02
  ) {
    super(accountNumber, owner, balance, transactionHistory);
    this.interestRate = interestRate;
  }

  calculateInterest(): number {
    return this.checkBalance() * this.interestRate;
  }
}

export { SavingsAccount };
