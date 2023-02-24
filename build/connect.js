"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const Client = require('pg').Client;
require('dotenv').config();
const user = process.env.DB_USER;
const password = process.env.DB_PASS;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const database = process.env.DB_BASE;
//export const client = new Client({user, password, host, port, database})
//const { Client } = require('pg');
exports.client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});
