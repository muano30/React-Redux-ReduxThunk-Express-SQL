const {Pool} = require('pg') 

const pool = new Pool({
    user: 'muano',
    host: 'localhost',
    database: "studentslibrary",
    password: 'kevin30',
    port: 5432,
}) 

const getClient = async () => {
    const client = await pool.connect()
return client
}

module.exports = {
    getClient
}