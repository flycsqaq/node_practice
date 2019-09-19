"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mysql_1 = __importDefault(require("mysql"));
const connection = mysql_1.default.createConnection({
    host: '47.107.147.152',
    user: 'zhoufeiyu',
    password: 'zfy1996514',
    database: 'node_demo',
    port: 3306,
});
connection.connect();
connection.query('SELECT 1 + 1 AS solution', function (error, results) {
    if (error)
        throw error;
    /* eslint-disable */
    console.log('The solution is: ', results[0].solution);
    /* eslint-disable */
});
const app = express_1.default();
app.get('/', function (_, res) {
    res.send('Hello, world');
});
app.listen(3000, function () {
    /* eslint-disable */
    console.log('app is listening at port 3000');
    /* eslint-disable */
});
exports.default = app;
//# sourceMappingURL=app.js.map