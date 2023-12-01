"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
class Bank {
    accounts = [];
    users = [];
    createUser(user) {
        this.users.push(user);
        console.log(`User created with name ${user.name}`);
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