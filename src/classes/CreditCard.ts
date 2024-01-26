
class CreditCard {
  constructor(
    public cardNumber: string,
    public creditLimit: number,
    public currentBalance: number = 0,
  ) {}

  makePurchase(amount: number): void {
    if (amount > this.creditLimit - this.currentBalance) {
      console.log("Purchase declined. Exceeds credit limit.");
      return;
    }

    this.currentBalance += amount;
    console.log(
      `Purchase of ${amount} made successfully. Current balance: ${this.currentBalance}`
    );
  }

  makePayment(amount: number): void {
    if (amount > this.currentBalance) {
      console.log("Payment declined. Amount exceeds current balance.");
      return;
    }

    this.currentBalance -= amount;
    console.log(
      `Payment of ${amount} made successfully. Current balance: ${this.currentBalance}`
    );
  }

  checkAvailableCredit(): number {
    return this.creditLimit - this.currentBalance;
  }
}

export { CreditCard };
