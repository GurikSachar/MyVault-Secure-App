require('dotenv').config()
const mongoose = require('mongoose')
const documentRoutes = require('./routes/documentRoutes')
const userRoutes = require('./routes/userRoutes')
const cors = require('cors')
const express = require('express')

const app = express()

app.use(cors())

app.use(express.json())

app.use('/api/documents', documentRoutes)
app.use('/api/users', userRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT)
})
.catch((error) => {
    console.log(error)
})

