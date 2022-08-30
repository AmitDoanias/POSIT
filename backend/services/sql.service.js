

const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./task.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message)
    console.log('connection sucessful')
})

function runSQL(sqlCommand) {
    return new Promise((resolve, reject) => {
        db.all(sqlCommand, function (error, results, fields) {
            if (error) reject(error);
            else resolve(results)
        });
    })
}

module.exports = {
    runSQL,
}