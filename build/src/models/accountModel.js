"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const mongoose_1 = require("mongoose");
const user_1 = require("../classes/user");
const accountSchema = new mongoose_1.Schema({
    owner: { type: user_1.User, required: true },
    balance: { type: Number, required: true },
});
const Account = (0, mongoose_1.model)("Account", accountSchema);
exports.Account = Account;
//# sourceMappingURL=accountModel.js.map