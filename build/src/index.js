"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const http_1 = __importDefault(require("http"));
const main_1 = require("./main");
// import { main } from "./services/connection";
exports.server = http_1.default.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify({
        data: main_1.acc,
    }));
});
exports.server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000/");
});
//# sourceMappingURL=index.js.map