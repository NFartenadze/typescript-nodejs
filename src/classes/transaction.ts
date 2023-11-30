class Transaction {
  id: string;
  amount: number;
  type: string;
  performedAt: Date;

  constructor(id: string, amount: number, type: string) {
    this.id = id;
    this.amount = amount;
    this.type = type;
    this.performedAt = new Date();
  }

  getTransactionDetails(): string {
    return `Transaction ID: ${this.id}, Amount: ${this.amount}, Type: ${this.type}, Performed At: ${this.performedAt}`;
  }
}

export { Transaction };
