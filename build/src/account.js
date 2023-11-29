"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    balance;
    constructor(balance = 0) {
        this.balance = balance;
    }
    deposit({ amount }) {
        this.addAmount(amount);
    }
    withdraw({ amount }) {
        const checkAmountToBalance = amount > this.balance;
        if (checkAmountToBalance) {
            throw new Error("Not Enough Money On Balance");
        }
        this.reduceAmount(amount);
    }
    addAmount(amount) {
        this.balance += amount;
    }
    reduceAmount(amount) {
        this.balance -= amount;
    }
}
//# sourceMappingURL=account.js.map