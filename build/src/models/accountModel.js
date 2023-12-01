"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountModel = void 0;
const mongoose_1 = require("mongoose");
const user_1 = require("../classes/user");
const accountSchema = new mongoose_1.Schema({
    owner: { type: user_1.User, required: true },
    balance: { type: Number, required: true },
}, {
    collection: "accounts",
});
const AccountModel = (0, mongoose_1.model)("Account", accountSchema);
exports.AccountModel = AccountModel;
//# sourceMappingURL=accountModel.js.map