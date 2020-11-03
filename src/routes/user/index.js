const { userController } = require('@controllers')
const { validateUserPayload } = require('@middlewares')

const {
  login,
  saveUser,
} = userController

const setUserRoutes = (routes) => {
  routes.post('/user', validateUserPayload, saveUser)
  routes.post('/user/login', validateUserPayload, login)
}

module.exports = setUserRoutes
