"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteData = exports.insertData = exports.disconnectFromMongoDB = exports.connectToMongoDB = void 0;
const mongodb_1 = require("mongodb");
const uri = "mongodb+srv://farnick1148:o1vvfQtCYh4ehKJK@cluster0.d9r34ci.mongodb.net/?retryWrites=true&w=majority";
const client = new mongodb_1.MongoClient(uri);
async function connectToMongoDB() {
    await client.connect();
    console.log("Connected to MongoDB");
    return client;
}
exports.connectToMongoDB = connectToMongoDB;
async function disconnectFromMongoDB() {
    await client.close();
}
exports.disconnectFromMongoDB = disconnectFromMongoDB;
async function insertData(collection, data) {
    return collection.insertOne(data);
}
exports.insertData = insertData;
async function deleteData(collection, filter) {
    return collection.deleteOne(filter);
}
exports.deleteData = deleteData;
//# sourceMappingURL=connection.js.map