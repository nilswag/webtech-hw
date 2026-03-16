import sqlite3 from "sqlite3";

const db = new sqlite3.Database("database/db.db", sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE);

// can run multiple queries but without parameters
export async function execQuery(sql) {
    return new Promise((resolve, reject) => {
        db.exec(sql, (err) => {
            if (err) reject(err);
            resolve();
        })
    }); 
}

// can only run one statement at a time but with parameters ('?' in queries)
export async function runQuery(sql, ...args) {
    return new Promise((resolve, reject) => {
        db.run(sql, args, (err) => {
            if (err) reject(err);
            resolve();
        });
    });
};
