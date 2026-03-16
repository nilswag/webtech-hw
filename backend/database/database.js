import sqlite3 from "sqlite3";

const db = new sqlite3.Database("database/db.db", sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE);

// (update, insert, delete, create, etc. commands only) can run multiple queries but without parameters
export async function execQuery(sql) {
    return new Promise((resolve, reject) => {
        db.exec(sql, (err) => {
            if (err) reject(err);
            resolve();
        })
    }); 
}

// (update, insert, delete, create, etc. commands only) can only run one statement at a time but with parameters ('?' in queries)
export async function runQuery(sql, ...args) {
    return new Promise((resolve, reject) => {
        db.run(sql, args, (err) => {
            if (err) reject(err);
            resolve();
        });
    });
};

// Query data to retrieve (returns all resulting rows)
export async function queryAll(sql, ...args) {
    return new Promise((resolve, reject) => {
        db.all(sql, args, (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}

// Query data to retrieve (returns first resulting row)
export async function queryFirst(sql, ...args) {
    return new Promise((resolve, reject) => {
        db.get(sql, args, (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
}