const express = require('express')
const { getCustomers } = require('./customer.controller')
const router = express.Router()

module.exports = router

router.get('/', getCustomers)