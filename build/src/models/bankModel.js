"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
const mongoose_1 = require("mongoose");
const bankSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    contactInfo: { type: String, required: true },
});
const Bank = (0, mongoose_1.model)("Bank", bankSchema);
exports.Bank = Bank;
//# sourceMappingURL=bankModel.js.map