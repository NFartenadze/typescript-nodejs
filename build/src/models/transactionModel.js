"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const mongoose_1 = require("mongoose");
const transactionSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    amount: { type: Number, required: true },
    type: { type: String, required: true },
    performedAt: { type: Date, required: true },
});
const Transaction = (0, mongoose_1.model)("Transaction", transactionSchema);
exports.Transaction = Transaction;
//# sourceMappingURL=transactionModel.js.map