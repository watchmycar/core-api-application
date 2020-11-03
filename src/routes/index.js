const Router = require('express')

const setUserRoutes = require('@routes/user')

const routes = Router()

setUserRoutes(routes)

module.exports = routes
