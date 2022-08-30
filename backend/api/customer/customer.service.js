const dbService = require('../../services/sql.service')

const COLLECTION_NAME = 'customers'

module.exports = {
    query
}

async function query(filterBy) {
    const req = `SELECT * FROM ${COLLECTION_NAME}`
    try {
        let customers = await dbService.runSQL(req)
        console.log('CUSTOMERS:', customers)
        return customers
    } catch (err) {
        console.log('ERROR:', err)
        throw err
    }
}