/** @format */

import express from 'express';
import mysql from 'mysql';
import session from 'express-session';

const connection = mysql.createConnection({
    host: '47.107.147.152',
    user: 'zhoufeiyu',
    password: 'zfy1996514',
    database: 'node_demo',
    port: 3306,
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(error, results) {
    if (error) throw error;
    /* eslint-disable */
    console.log('The solution is: ', results[0].solution);
    /* eslint-disable */
});

const app = express();

app.use(session({}));

app.get('/api', function(_, res) {
    res.send('Hello, world');
});

export default app;
