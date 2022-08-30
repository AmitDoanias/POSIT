const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
const http = require('http').createServer(app)

app.use(express.json())
app.use(express.static('public'))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')))
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    }
    app.use(cors(corsOptions))
}

//ROUTES
const technicianRoutes = require('./api/technician/technician.routes')
const customerRoutes = require('./api/customer/customer.routes')
const warehouseRoutes = require('./api/warehouse/warehouse.routes')
const callRoutes = require('./api/call/call.routes')

app.use('/api/technician', technicianRoutes)
app.use('/api/customer', customerRoutes)
app.use('/api/warehouse', warehouseRoutes)
app.use('/api/call', callRoutes)

/* LAST FALLBACK */
app.get('/**', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

const PORT = process.env.PORT || 3030

http.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})