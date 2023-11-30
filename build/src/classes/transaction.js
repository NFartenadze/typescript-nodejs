"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
class Transaction {
    id;
    amount;
    type;
    performedAt;
    constructor(id, amount, type) {
        this.id = id;
        this.amount = amount;
        this.type = type;
        this.performedAt = new Date();
    }
    getTransactionDetails() {
        return `Transaction ID: ${this.id}, Amount: ${this.amount}, Type: ${this.type}, Performed At: ${this.performedAt}`;
    }
}
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.js.map