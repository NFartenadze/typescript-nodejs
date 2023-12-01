"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBank = void 0;
const bank_1 = require("../classes/bank");
const bankModel_1 = require("../models/bankModel");
async function addBank() {
    const bank = await bankModel_1.BankModel.create(new bank_1.Bank());
    console.log("added bank");
}
exports.addBank = addBank;
//# sourceMappingURL=bankService.js.map