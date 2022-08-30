const warehouseService = require('./warehouse.service')

module.exports = {
    getWarehouses
}

async function getWarehouses(req, res) {
    try {
        const filterBy = (req.query)
        const warehouses = await warehouseService.query(filterBy || '{}')
        res.send(warehouses)
    } catch (err) {
        res.status(500).send({ err: 'Failed to get warehouses' })
    }
}