"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    name;
    contactInfo;
    constructor(name, contactInfo) {
        this.name = name;
        this.contactInfo = contactInfo;
    }
    getUserDetails() {
        return `User Name: ${this.name},\n Contact: ${this.contactInfo}`;
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map