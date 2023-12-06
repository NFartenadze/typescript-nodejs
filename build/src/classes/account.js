"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const withdraw_1 = require("./withdraw");
const deposit_1 = require("./deposit");
class Account {
    owner;
    balance;
    transactionHistory = [];
    constructor(owner, balance = 0) {
        this.owner = owner;
        this.balance = balance;
    }
    executeTransaction(account, transaction) {
        try {
            if (transaction.type === "deposit") {
                account.deposit(new deposit_1.Deposit(transaction.amount));
                console.log(`Deposit of ${transaction.amount} successful. New balance: ${account.checkBalance()}`);
            }
            else if (transaction.type === "withdraw") {
                account.withdraw(new withdraw_1.WithDraw(transaction.amount));
                console.log(`Withdrawal of ${transaction.amount} successful. New balance: ${account.checkBalance()}`);
            }
            else {
                console.log("Invalid transaction type");
            }
            this.transactionHistory.push(transaction);
            console.log(`Transaction recorded: ${transaction.getTransactionDetails()}`);
        }
        catch (error) {
            console.log(`Transaction failed: ${error.message}`);
        }
    }
    deposit(deposit) {
        this.balance += deposit.amount;
    }
    withdraw(withdraw) {
        const checkAmountToBalance = withdraw.amount > this.balance;
        if (checkAmountToBalance) {
            throw new Error("Not Enough Money On Balance");
        }
        this.balance -= withdraw.amount;
        console.log(`Withdrawn ${withdraw.amount}. New balance: ${this.balance}`);
    }
    checkBalance() {
        return this.balance;
    }
}
exports.Account = Account;
//# sourceMappingURL=account.js.map