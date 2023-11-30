"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    id;
    name;
    contactInfo;
    constructor(id, name, contactInfo) {
        this.id = id;
        this.name = name;
        this.contactInfo = contactInfo;
    }
    getUserDetails() {
        return `Customer ID: ${this.id},\nName: ${this.name},\nContact: ${this.contactInfo}`;
    }
    userId() {
        return this.id;
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map