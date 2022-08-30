const technicianService = require('./technician.service')

module.exports = {
    getTechnicians,
    getTechnicianById

}

async function getTechnicians(req, res) {
    try {
        const filterBy = req.query
        const technicians = await technicianService.query(filterBy || '{}')
        res.send(technicians)
    } catch (err) {
        res.status(500).send({ err: 'Failed to get technicians' })
    }
}

async function getTechnicianById(req, res) {
    try {
        const { technicianId } = req.params
        const technician = await technicianService.getTechnicianById(technicianId)
        if (!technician) return res.status(401).send('Failed to get technician')
        res.send(technician)

    } catch (err) {
        res.status(500).send({ err: 'Failed to get technician' })
    }
}

// async function addTechnician(req, res) {
//     try {
//         let technician = req.body
//         const savedTechnician = await technicianService.add(technician)
//         if (!savedTechnician) return res.status(401).send('Failed to add technician')
//         res.send(savedTechnician)
//     } catch (err) {
//         res.status(500).send({ err: 'Failed to add technician' })
//     }
// }

// async function updateTechnician(req, res) {
//     try {
//         const technician = req.body
//         const savedTechnician = await technicianService.update(technician)
//         if (!savedTechnician) return res.status(401).send('Failed to update technician')
//         res.send(savedTechnician)
//     } catch (err) {
//         res.status(500).send({ err: 'Failed to update technician' })
//     }
// }
