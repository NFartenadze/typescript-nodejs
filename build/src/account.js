"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    firstName;
    lastName;
    balance;
    transactionHistory = [];
    constructor(firstName, lastName, balance = 0) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.balance = balance;
    }
    deposit(deposit) {
        this.addAmount(deposit.amount);
        this.transactionHistory.push(deposit);
    }
    withdraw(withdraw) {
        const checkAmountToBalance = withdraw.amount > this.balance;
        if (checkAmountToBalance) {
            throw new Error("Not Enough Money On Balance");
        }
        this.reduceAmount(withdraw.amount);
        this.transactionHistory.push(withdraw);
    }
    addAmount(amount) {
        this.balance += amount;
    }
    reduceAmount(amount) {
        this.balance -= amount;
    }
}
exports.Account = Account;
//# sourceMappingURL=account.js.map