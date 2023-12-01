"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBanks = exports.addBank = void 0;
const bank_1 = require("../classes/bank");
const bankModel_1 = require("../models/bankModel");
async function addBank() {
    const bank = await bankModel_1.BankModel.create(new bank_1.Bank());
    console.log(`added bank ${bank}`);
}
exports.addBank = addBank;
async function getBanks() {
    const banks = await bankModel_1.BankModel.find({});
    console.log(banks);
}
exports.getBanks = getBanks;
//# sourceMappingURL=bankService.js.map