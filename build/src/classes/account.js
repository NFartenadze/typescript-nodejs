"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    owner;
    balance;
    // transactionHistory: Array<WithDraw | Deposit> = [];
    constructor(owner, balance = 0) {
        this.owner = owner;
        this.balance = balance;
    }
    deposit(deposit) {
        this.balance += deposit.amount;
        // this.transactionHistory.push(deposit);
    }
    withdraw(withdraw) {
        const checkAmountToBalance = withdraw.amount > this.balance;
        if (checkAmountToBalance) {
            throw new Error("Not Enough Money On Balance");
        }
        this.balance -= withdraw.amount;
        console.log(`Withdrawn ${withdraw.amount}. New balance: ${this.balance}`);
        // this.transactionHistory.push(withdraw);
    }
    getBalance() {
        return this.balance;
    }
}
exports.Account = Account;
//# sourceMappingURL=account.js.map