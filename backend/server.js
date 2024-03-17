require('dotenv').config()
const mongoose = require('mongoose')
const documentRoutes = require('./routes/documentRoutes')
const userRoutes = require('./routes/userRoutes')
const cors = require('cors')
const express = require('express')
const rateLimit = require('express-rate-limit')

const app = express()

const limiter = rateLimit({
    limit: 50,
    windowMs: 60*60*1000,
    message: "Too many request from this IP, please try again in an hour",
})

app.use(cors())

app.use(limiter)

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

