"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
const mongoose_1 = require("mongoose");
const account_1 = require("../classes/account");
const user_1 = require("../classes/user");
const transaction_1 = require("../classes/transaction");
const bankSchema = new mongoose_1.Schema({
    accounts: { type: [account_1.Account], required: true },
    users: { type: [user_1.User], required: true },
    transactions: { type: [transaction_1.Transaction], required: true },
});
const Bank = (0, mongoose_1.model)("Bank", bankSchema);
exports.Bank = Bank;
//# sourceMappingURL=bankModel.js.map