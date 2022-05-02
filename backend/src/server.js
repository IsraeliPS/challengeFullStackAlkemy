const express = require('express')
// const apiRouter = require('./routes')
const cors = require('cors')

const app = express()

const config = require('./lib/config')
// const db = require('./lib/db')

const port = config.app.port

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
  res.send(' CHALLENGE FULL STACK - JavaScript 🚀 By Israelí Pérez')
})

// apiRouter(app)

module.exports = { app, port }
