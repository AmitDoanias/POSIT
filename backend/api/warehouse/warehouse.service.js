const dbService = require('../../services/sql.service')

const COLLECTION_NAME = 'warehouses'

module.exports = {
    query,
    getAvailableWarehouse,
}

async function query(filterBy) {
    const req = `SELECT * FROM ${COLLECTION_NAME}`
    try {
        let warehouses = await dbService.runSQL(req)
        return warehouses
    } catch (err) {
        console.log('ERROR:', err)
        throw err
    }
}

async function getAvailableWarehouse(item) {
    const req = `SELECT * FROM warehouses WHERE ${item}_stock = (SELECT MAX(${item}_stock)FROM warehouses)`
    try {
        const [warehouse] = await dbService.runSQL(req)
        warehouse[`${item}_stock`]--
        updateWarehouse(warehouse, item)
        return warehouse.name

    } catch (err) {
        console.log(err)
    }
}

async function updateWarehouse(warehouse, item) {
    const req = `UPDATE warehouses set ${item}_stock = ${warehouse[`${item}_stock`]} 
                WHERE id = ${warehouse.id}`

    var okPacket = await dbService.runSQL(req);
    if (okPacket.affectedRows !== 0) return okPacket;
    throw new Error(`Warehouse failed to update - warehouse id ${warehouse.id}`);
}