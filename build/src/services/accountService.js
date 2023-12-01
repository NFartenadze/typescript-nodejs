"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAccount = void 0;
const account_1 = require("../classes/account");
const user_1 = require("../classes/user");
const accountModel_1 = require("../models/accountModel");
async function addAccount() {
    const account = await accountModel_1.AccountModel.create(new account_1.Account(new user_1.User("billy", "new york"), 2000));
    console.log("added account");
}
exports.addAccount = addAccount;
//# sourceMappingURL=accountService.js.map