"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.getUsers = exports.addUser = void 0;
const user_1 = require("../classes/user");
const userModel_1 = require("../models/userModel");
async function addUser(userName, contactInfo) {
    const user = await userModel_1.UserModel.create(new user_1.User(userName, contactInfo));
    console.log(`added user ${user}`);
}
exports.addUser = addUser;
async function getUsers() {
    const users = await userModel_1.UserModel.find({});
    console.log(users);
}
exports.getUsers = getUsers;
async function updateUser(userId, name) {
    const user = await userModel_1.UserModel.findById(userId);
    const output = await user?.updateOne({ name: name });
    console.log(output);
}
exports.updateUser = updateUser;
//# sourceMappingURL=userService.js.map