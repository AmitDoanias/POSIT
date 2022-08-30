const dbService = require('../../services/sql.service')

const COLLECTION_NAME = 'technicians'

module.exports = {
    query,
    getTechnicianById,
    getAvailableTechnician,
}

async function query(filterBy) {
    const req = `SELECT * FROM ${COLLECTION_NAME}`
    try {
        let technicians = await dbService.runSQL(req)
        return technicians
    } catch (err) {
        console.log('ERROR:', err)
        throw err
    }
}

async function getTechnicianById(technicianId) {
    const req = `SELECT * FROM technicians WHERE id = "${technicianId}"`
    try {
        const technician = await dbService.runSQL(req)
        return technician
    } catch (err) {
        console.log(`ERROR: cannot find technician ${technicianId} (technician.service - getById)`)
        console.log('ERROR', err)
        throw err
    }
}

async function getAvailableTechnician() {
    const req = `SELECT techId,min(c) FROM( SELECT assignedTechnicianId as techId,count(*) as c FROM calls GROUP BY assignedTechnicianId ORDER BY COUNT(*) asc)`
    try {
        const [technician] = await dbService.runSQL(req)
        return technician.techId

    } catch (err) {
        console.log(err)
    }
}



