const express = require('express')
const { getCalls, addCall, getCallsById } = require('./call.controller')
const router = express.Router()


module.exports = router

router.get('/', getCalls)
router.get('/:technicianId', getCallsById)
router.post('/', addCall)

