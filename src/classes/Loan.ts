import { User } from "./User";
import { Transaction } from "./Transaction";

class Loan {
  loanAmount: number;
  interestRate: number;
  repaymentPeriodMonths: number;
  user: User;
  remainingAmount: number;
  startDate: Date;
  repaymentHistory: Transaction[] = [];

  constructor(
    loanAmount: number,
    interestRate: number,
    repaymentPeriodMonths: number,
    user: User
  ) {
    this.loanAmount = loanAmount;
    this.interestRate = interestRate;
    this.repaymentPeriodMonths = repaymentPeriodMonths;
    this.remainingAmount = loanAmount;
    this.startDate = new Date();
    this.user = user;
  }

  makeRepayment(amount: number): void {
    if (amount <= 0 || amount > this.remainingAmount) {
      console.log("Invalid repayment amount");
      return;
    }

    this.remainingAmount -= amount;

    const repaymentTransaction = new Transaction(
      amount,
      "loan-payment",
      new Date()
    );
    this.repaymentHistory.push(repaymentTransaction);

    console.log(
      `Repayment of ${amount} made successfully. Remaining amount: ${this.remainingAmount}`
    );
  }

  getLoanDetails(): string {
    return `
      Loan Amount: ${this.loanAmount}
      Interest Rate: ${this.interestRate}
      Repayment Period: ${this.repaymentPeriodMonths} months
      Start Date: ${this.startDate.toDateString()}
      Remaining Amount: ${this.remainingAmount}
    `;
  }

  getRepaymentHistory(): Transaction[] {
    return this.repaymentHistory;
  }
}

export { Loan };
