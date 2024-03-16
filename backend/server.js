require('dotenv').config()
const mongoose = require('mongoose')
const documentRoutes = require('./routes/documentRoutes')
const userRoutes = require('./routes/userRoutes')
const cors = require('cors')

const express = require('express')

const app = express()

app.use(cors())

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/documents', documentRoutes)
app.use('/api/users', userRoutes)

mongoose.connect('mongodb+srv://myvaultuser:useraccess22@myvault.qwncgg7.mongodb.net/')
.then(() => {
    app.listen(4000)
})
.catch((error) => {
    console.log(error)
})

