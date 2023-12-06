type TransferType = "transfer" | "deposit" | "withdraw" | "receive";
class Transaction {
  constructor(
    public amount: number,
    public type: TransferType,
    public performedAt: Date
  ) {
    this.performedAt = new Date();
  }

  getTransactionDetails(): string {
    return `Transaction Amount: ${this.amount}, Type: ${this.type}, Performed At: ${this.performedAt}`;
  }
}

export { Transaction };
