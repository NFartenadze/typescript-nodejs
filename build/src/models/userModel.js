"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    contactInfo: { type: String, required: true },
}, {
    collection: "users",
});
const UserModel = (0, mongoose_1.model)("User", userSchema);
exports.UserModel = UserModel;
//# sourceMappingURL=userModel.js.map