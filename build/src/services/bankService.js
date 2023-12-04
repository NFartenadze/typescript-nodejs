"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBank = exports.getBanks = exports.addBank = void 0;
const bank_1 = require("../classes/bank");
const bankModel_1 = require("../models/bankModel");
async function addBank() {
    try {
        const bank = await bankModel_1.BankModel.create(new bank_1.Bank("Example Bank"));
        console.log(`added bank ${bank}`);
    }
    catch (error) {
        console.log(error, { message: error.message });
    }
}
exports.addBank = addBank;
async function getBanks() {
    try {
        const banks = await bankModel_1.BankModel.find({});
        console.log(banks);
    }
    catch (error) {
        console.log(error, { message: error.message });
    }
}
exports.getBanks = getBanks;
async function updateBank(bankId, updateFields) {
    try {
        const bank = await bankModel_1.BankModel.findByIdAndUpdate(bankId, updateFields, {
            new: true,
        });
        console.log("Bank updated successfully:", bank);
    }
    catch (error) {
        console.error(error, error.message);
    }
}
exports.updateBank = updateBank;
//# sourceMappingURL=bankService.js.map