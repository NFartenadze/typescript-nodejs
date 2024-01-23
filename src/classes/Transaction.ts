type TransferType =
  | "transfer"
  | "deposit"
  | "withdraw"
  | "receive"
  | "loan-payment";
class Transaction {
  constructor(
    public transactionId: string,
    public amount: number,
    public type: TransferType,
    public performedAt: Date
  ) {
    this.performedAt = new Date();
  }

  getTransactionDetails(): string {
    return `Transaction Amount: ${this.amount}, Type: ${this.type}, Performed At: ${this.performedAt}, Transaction Id: ${this.transactionId}`;
  }
}

export { Transaction };
