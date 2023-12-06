"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAccount = exports.getAccounts = exports.createAccount = void 0;
const account_1 = require("../classes/account");
const user_1 = require("../classes/user");
const accountModel_1 = require("../models/accountModel");
async function createAccount(user = new user_1.User("thomas", "madagascar"), balance) {
    try {
        const account = await accountModel_1.AccountModel.create(new account_1.Account(user, balance));
        console.log(`added account ${account}`);
    }
    catch (error) {
        console.log(error, { message: error.message });
    }
}
exports.createAccount = createAccount;
async function getAccounts() {
    try {
        const accounts = await accountModel_1.AccountModel.find({});
        console.log(accounts);
    }
    catch (error) {
        console.log(error, { message: error.message });
    }
}
exports.getAccounts = getAccounts;
async function updateAccount(accountId, updateFields) {
    try {
        const acc = await accountModel_1.AccountModel.findByIdAndUpdate(accountId, updateFields, {
            new: true,
        });
        console.log("account updated successfully", acc);
    }
    catch (error) {
        console.log(error, { message: error.message });
    }
}
exports.updateAccount = updateAccount;
//# sourceMappingURL=accountService.js.map