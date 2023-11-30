"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
const deposit_1 = require("./deposit");
const withdraw_1 = require("./withdraw");
class Bank {
    accounts = [];
    users = [];
    transactions = [];
    createUser(user) {
        this.users.push(user);
        console.log(`User created with ID ${user.userId}`);
    }
    createAccount(account) {
        if (!this.users.includes(account.owner)) {
            console.log("User not found. Please create a user first.");
            return;
        }
        //check if account exists
        if (!this.accounts.includes(account)) {
            this.accounts.push(account);
            console.log(`Account created for ${account.owner}`);
        }
        else {
            console.log("Account already exists");
        }
    }
    executeTransaction(account, transaction) {
        if (!this.accounts.includes(account)) {
            console.log("Account not found");
            return;
        }
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
            this.transactions.push(transaction);
            console.log(`Transaction recorded: ${transaction.getTransactionDetails()}`);
        }
        catch (error) {
            console.log(`Transaction failed: ${error.message}`);
        }
    }
    checkBalance(account) {
        if (!this.accounts.includes(account)) {
            console.log("Account not found");
            return;
        }
        const balance = account.checkBalance();
        console.log(`Account balance: ${balance}`);
    }
}
exports.Bank = Bank;
//# sourceMappingURL=bank.js.map