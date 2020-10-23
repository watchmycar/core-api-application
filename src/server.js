
const http = require('http')
const express = require('express')
const bearerToken = require('express-bearer-token')
const bodyParser = require('body-parser')
const routes = require('./routes')
const { handleErrors } = require('./libs')
const { port } = require('../config')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bearerToken())

app.use('/', routes)

app.use((err, req, res, next) => {
  const { statusCode, errorBody } = handleErrors(err)
  return res.status(statusCode).json(errorBody)
})

app.use((req, res) => res.status(404).json({ message: 'Resource not found' }))

const server = http.createServer(app)

exports.start = () => server.listen(port, () => console.log(`Listening on port ${port}`))
exports.server = server
