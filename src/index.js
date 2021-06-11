const express = require('express')
const app = express()
const mongoose = require('mongoose')
const appointmentRoutes = require('./routes/appointmentRoutes.js')
const dbSetup = require('./database/setup.js')
const port =  8003;

app.use(express.json());



dbSetup()
app.use(appointmentRoutes)


app.listen(port, () => {
 console.log("server is on")
})
