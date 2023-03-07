const Pool = require('pg-pool')

const db = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: "1234",
    database: 'flatish',
    max: 20
})

module.exports = db;
