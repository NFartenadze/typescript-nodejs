"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.addUser = void 0;
const user_1 = require("../classes/user");
const userModel_1 = require("../models/userModel");
async function addUser() {
    const user = await userModel_1.UserModel.create(new user_1.User("bob", "california"));
    console.log("added user");
}
exports.addUser = addUser;
async function getUsers() {
    const users = await userModel_1.UserModel.find({});
    console.log(users);
}
exports.getUsers = getUsers;
//# sourceMappingURL=userService.js.map