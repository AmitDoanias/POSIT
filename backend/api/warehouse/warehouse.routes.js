const express = require('express')
const { getWarehouses } = require('./warehouse.controller')
const router = express.Router()

module.exports = router

router.get('/', getWarehouses)