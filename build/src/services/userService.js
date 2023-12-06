"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.deleteUserById = exports.updateUser = exports.getUser = exports.getUsers = exports.createUser = void 0;
const userModel_1 = require("../models/userModel");
async function createUser(user) {
    try {
        await userModel_1.UserModel.create(user);
        console.log(`added user ${user}`);
    }
    catch (error) {
        console.log(error, { message: error.message });
    }
}
exports.createUser = createUser;
async function getUsers() {
    try {
        const users = await userModel_1.UserModel.find({});
        console.log(users);
        return users;
    }
    catch (error) {
        console.log(error, { message: error.message });
        return;
    }
}
exports.getUsers = getUsers;
async function getUser(field) {
    try {
        const user = await userModel_1.UserModel.findOne(field);
        if (!user) {
            console.log(`Couldn't find user with ${field}`);
            return;
        }
        console.log(user);
        return user;
    }
    catch (error) {
        console.log("Couldn't find user", { message: error.message });
    }
}
exports.getUser = getUser;
async function updateUser(field, updateFields) {
    try {
        const user = await userModel_1.UserModel.findOneAndUpdate(field, updateFields, {
            new: true,
        });
        if (!user) {
            console.log(`User with ${field} not found`);
            return;
        }
        console.log("User updated successfully:", user);
    }
    catch (error) {
        console.error("Error updating user:", error.message);
    }
}
exports.updateUser = updateUser;
async function deleteUserById(userId) {
    try {
        const user = await userModel_1.UserModel.findById({ _id: userId });
        if (!user) {
            console.log(`User with id ${userId} not found`);
            return;
        }
        await userModel_1.UserModel.deleteOne({ _id: userId });
        console.log(`deleted user with id: ${userId}`);
    }
    catch (error) {
        console.log("Error deleting user", { message: error.message });
    }
}
exports.deleteUserById = deleteUserById;
async function deleteUser(query) {
    try {
        const user = await userModel_1.UserModel.findOne(query);
        if (!user) {
            console.log(`User with ${query} not found`);
            return;
        }
        await userModel_1.UserModel.deleteOne(query);
        console.log(`deleted user with ${query}`);
    }
    catch (error) {
        console.log("Error deleting user", { message: error.message });
    }
}
exports.deleteUser = deleteUser;
//# sourceMappingURL=userService.js.map