const express = require('express')
// const { getTechnicians, getTechnicianById, addTechnician, updateTechnician, removeTechnician } = require('./technician.controller')
const { getTechnicians, getTechnicianById } = require('./technician.controller')
const router = express.Router()

module.exports = router

router.get('/', getTechnicians)
router.get('/:technicianId', getTechnicianById)
// router.post('/', requireAuth, requireAdmin, addTechnician) /* FIX - remove auth of admin, one has to stay since we need owner */
// router.put('/', requireAuth, requireAdmin, updateTechnician) /* FIX - remove auth of admin, one has to stay since we need owner */
// router.delete('/:technicianId', requireAuth, requireAdmin, removeTechnician) /* FIX - remove auth of admin, one has to stay since we need owner */