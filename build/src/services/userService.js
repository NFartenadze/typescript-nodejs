"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.getUsers = exports.addUser = void 0;
const user_1 = require("../classes/user");
const userModel_1 = require("../models/userModel");
async function addUser(userName, contactInfo) {
    try {
        const user = await userModel_1.UserModel.create(new user_1.User(userName, contactInfo));
        console.log(`added user ${user}`);
    }
    catch (error) {
        console.log(error, { message: error.message });
    }
}
exports.addUser = addUser;
async function getUsers() {
    try {
        const users = await userModel_1.UserModel.find({});
        console.log(users);
    }
    catch (error) {
        console.log(error, { message: error.message });
    }
}
exports.getUsers = getUsers;
async function updateUser(userId, updateFields) {
    try {
        const user = await userModel_1.UserModel.findByIdAndUpdate(userId, updateFields, {
            new: true,
        });
        console.log("User updated successfully:", user);
    }
    catch (error) {
        console.error("Error updating user:", error.message);
    }
}
exports.updateUser = updateUser;
//# sourceMappingURL=userService.js.map