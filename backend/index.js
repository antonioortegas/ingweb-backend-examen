const express = require('express')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 3000

const usersRouter = require('./src/routes/usersRouter')
const birdsRouter = require('./src/routes/birdsRouter')

app.use('/users', usersRouter)
app.use('/birds', birdsRouter)

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`)
})