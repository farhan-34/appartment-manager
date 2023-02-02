const Pool = require('pg-pool')

const db = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: "f8847452",
    database: 'flatish',
    max: 20
})

module.exports = db;
