"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const promise_1 = require("mysql2/promise");
exports.pool = (0, promise_1.createPool)({
    host: 'roundhouse.proxy.rlwy.net',
    user: 'root',
    password: '4CeEf41EDHHAHHhb-Cgf6Bb4b4dff3A1',
    port: 29247,
    database: 'railway'
});
