type TransferType = "transfer" | "deposit" | "withdraw" | "receive";
class Transaction {
  amount: number;
  type: TransferType;
  performedAt: Date;

  constructor(amount: number, type: TransferType) {
    this.amount = amount;
    this.type = type;
    this.performedAt = new Date();
  }

  getTransactionDetails(): string {
    return `Transaction Amount: ${this.amount}, Type: ${this.type}, Performed At: ${this.performedAt}`;
  }
}

export { Transaction };
