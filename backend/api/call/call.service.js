const dbService = require('../../services/sql.service')
const technicanService = require('../technician/technician.service')
const warehouseService = require('../warehouse/warehouse.service')

const COLLECTION_NAME = 'calls'

module.exports = {
    query,
    add,
    getCallsById

}

async function query() {
    const req = `SELECT * FROM ${COLLECTION_NAME}`
    try {
        let calls = await dbService.runSQL(req)
        return calls
    } catch (err) {
        console.log('err', err)
        throw err
    }
}

async function getCallsById(technicianId) {
    const req = `SELECT * FROM ${COLLECTION_NAME} WHERE assignedTechnicianId="${technicianId}"`
    try {
        const calls = await dbService.runSQL(req)
        return calls
    } catch (err) {
        console.log(`ERROR: cannot find technician ${technicianId} (technician.service - getById)`)
        console.log('ERROR', err)
    }
    throw err
}

async function add(call) {
    const { title, description, customerName, hardwareToReplace } = call
    const assignedTechnicianId = await technicanService.getAvailableTechnician()
    const warehouse = await warehouseService.getAvailableWarehouse(hardwareToReplace)

    const newCall = {
        title,
        description,
        customerName,
        hardwareToReplace,
        assignedTechnicianId,
        warehouse
    }

    const req = `INSERT INTO calls 
            (title,description,customerName,hardwareToReplace,assignedTechnicianId,warehouse)
            VALUES ('${title}',
            '${description}',
            '${customerName}',
            '${hardwareToReplace}',
            '${assignedTechnicianId}',
            '${warehouse}')`
    try {
        const id = await dbService.runSQL(req)
        return newCall
    } catch (err) {
        console.log(err)
    }
}




//Open a new table "calls"
// function createNewTable() {
// const command = `CREATE TABLE calls(_id INTEGER PRIMARY KEY,
//                                     date default current_timestamp,
//                                     title TEXT, 
//                                     description TEXT,
//                                     customerName TEXT,
//                                     hardwareToReplace TEXT,
//                                     assignedTechnicianId INTEGER,
//                                     warehouse TEXT)`
// }




