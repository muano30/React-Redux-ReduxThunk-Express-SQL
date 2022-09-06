const { getClient } = require('../database/db');


const clientQuery = async (insertQuery, parameters) => {
    const client = await getClient();

    try {
        res = await client.query(insertQuery, parameters);
        return res.rows;
    } catch (e) {
        console.log(e)
        await client.release()
    }
}

module.exports = {
    clientQuery
}