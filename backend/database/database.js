import sqlite3 from "sqlite3";

const db = new sqlite3.Database("database/db.db", sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE);

/**
 * Execute DML/DDL query/queries without parameters.
 * @param {*} sql The sql query to be executed.
 * @returns An empty pomise.
 */
export async function execQuery(sql) {
    return new Promise((resolve, reject) => {
        db.exec(sql, (err) => {
            if (err) reject(err);
            resolve();
        })
    }); 
}

/**
 * Execute DML/DDL query with parameters (only 1 query at a time).
 * @param {*} sql The sql query to be executed.
 * @param  {...any} args The optional parameters.
 * @returns An empty promise.
 */
export async function runQuery(sql, ...args) {
    return new Promise((resolve, reject) => {
        db.run(sql, args, (err) => {
            if (err) reject(err);
            resolve();
        });
    });
};

/**
 * Fetch all rows as result of a query.
 * @param {*} sql The sql query to be executed.
 * @param  {...any} args The optional parameters.
 * @returns A promise containing all resulting rows.
 */
export async function fetchAll(sql, ...args) {
    return new Promise((resolve, reject) => {
        db.all(sql, args, (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}

/**
 * Fetch first row as result of query.
 * @param {*} sql The sql query to be executed.
 * @param  {...any} args The optional parameters.
 * @returns A promise containing the first resulting row. 
 */
export async function fetchFirst(sql, ...args) {
    return new Promise((resolve, reject) => {
        db.get(sql, args, (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}