import Logger from './logger';
import pool from './database';
const LOG = new Logger('initDB.js');
const { DB_SCHEMA } = process.env;

const createDB =`CREATE DATABASE IF NOT EXISTS ${DB_SCHEMA}`;
const createTable =  `CREATE TABLE IF NOT EXISTS ${DB_SCHEMA}.users(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(30) NOT NULL,
    role VARCHAR(30) NOT NULL,
    PRIMARY KEY ( id ))`;

export const users = [
    { name: "James", email: "James@123.com", password: "1!23#4", role: "EMPLOYEE" },
    { name: "Peter", email: "Peter@123.com", password: "8^23!3", role: "EMPLOYEE" },
    { name: "John", email: "John@123.com", password: "98!891", role: "ADMIN"},
    { name: "Fred", email: "Fred@123.com", password: "68651", role: "ADMIN"}
];

export const initDB = async () => {
    try {
        const db = await pool();
        await clearTable(db);
        await  db.query(createDB);
        await db.query(createTable);
        let allUsers = users.map(user => Object.values(user));
        console.log(JSON.stringify(allUsers));
        await  db.batch(`INSERT INTO users(name, email, password, role) VALUES (?, ?, ?, ?)`, allUsers);
        LOG.info('DB initialized successfully');
    } catch (error) {
        LOG.error('DB initialization failed');
        console.log(error);
    }
}

const clearTable = async (db) => {
    try {
        await  db.query(`DROP table users`);
    } catch (error) { 
        LOG.error('Error while removing users table');
        console.log(error);
    }

};

 initDB();