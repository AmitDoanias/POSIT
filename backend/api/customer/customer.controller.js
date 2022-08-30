const customerService = require('./customer.service')

module.exports = {
    getCustomers,
}

async function getCustomers(req, res) {
    try {
        const filterBy = req.query
        const customers = await customerService.query(filterBy || '{}')
        res.send(customers)
    } catch (err) {
        res.status(500).send({ err: 'Failed to get customers' })
    }
}