const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose');

const app = express()
const PORT = process.env.PORT || 3000
const MONGO_URI= process.env.MONGO_URI || "mongodb://admin:admin@localhost:27017/laWiki?authSource=admin"

const usersRouter = require('./src/routes/usersRouter')
const birdsRouter = require('./src/routes/birdsRouter')

app.use('/users', usersRouter)
app.use('/birds', birdsRouter)

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB')
        app.listen(PORT, () => {
            console.log(`App listening on http://localhost:${PORT}`)
        })
    }
)
