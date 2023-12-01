"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAccount = exports.getAccounts = exports.addAccount = void 0;
const account_1 = require("../classes/account");
const user_1 = require("../classes/user");
const accountModel_1 = require("../models/accountModel");
async function addAccount(user = new user_1.User("thomas", "madagascar"), balance) {
    const account = await accountModel_1.AccountModel.create(new account_1.Account(user, balance));
    console.log(`added account ${account}`);
}
exports.addAccount = addAccount;
async function getAccounts() {
    const accounts = await accountModel_1.AccountModel.find({});
    console.log(accounts);
}
exports.getAccounts = getAccounts;
async function updateAccount(account, balance) {
    const acc = await accountModel_1.AccountModel.findOneAndUpdate(account.owner, {
        balance: balance,
    });
}
exports.updateAccount = updateAccount;
//# sourceMappingURL=accountService.js.map