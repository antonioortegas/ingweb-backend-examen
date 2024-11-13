const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose');

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000
const MONGO_URI= process.env.MONGO_URI || "mongodb://admin:admin@localhost:27017/laWiki?authSource=admin"

const userRouter = require('./src/routes/userRouter')
const eventRouter = require('./src/routes/eventRouter')

app.use('/users', userRouter)
app.use('/events', eventRouter)

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB')
        app.listen(PORT, () => {
            console.log(`App listening on http://localhost:${PORT}`)
        })
    }
)
