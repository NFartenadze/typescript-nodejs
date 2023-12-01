"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankModel = void 0;
const mongoose_1 = require("mongoose");
const account_1 = require("../classes/account");
const user_1 = require("../classes/user");
const bankSchema = new mongoose_1.Schema({
    accounts: { type: [account_1.Account], required: true },
    users: { type: [user_1.User], required: true },
}, {
    collection: "banks",
});
const BankModel = (0, mongoose_1.model)("Bank", bankSchema);
exports.BankModel = BankModel;
//# sourceMappingURL=bankModel.js.map