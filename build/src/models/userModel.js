"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    contactInfo: { type: String, required: true },
}, {
    collection: "users",
});
const User = (0, mongoose_1.model)("User", userSchema);
exports.User = User;
//# sourceMappingURL=userModel.js.map