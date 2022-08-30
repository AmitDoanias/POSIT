const callService = require('./call.service')

module.exports = {
    getCalls,
    addCall,
    getCallsById,
}

async function getCalls(req, res) {

    try {
        const calls = await callService.query('{}')
        res.send(calls)
    } catch (err) {
        res.status(500).send({ err: 'Failed to get calls' })
    }
}

async function getCallsById(req, res) {
    try {
        const { technicianId } = req.params
        const calls = await callService.getCallsById(technicianId)
        if (!calls) return res.status(401).send('Failed to get calls')
        res.send(calls)
    } catch (err) {
        res.status(500).send({ err: 'Failed to get calls' })
    }
}

async function addCall(req, res) {
    try {
        const call = req.body
        const savedCall = await callService.add(call)
        if (!savedCall) return res.status(401).send('Failed to add call')
        else res.send(savedCall)
    } catch (err) {
        res.status(500).send({ err: 'Failed to add call' })
    }
}