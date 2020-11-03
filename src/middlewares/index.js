const validateToken = require('@middlewares/auth')
const validateUserPayload = require('@middlewares/user')

module.exports = {
  validateToken,
  validateUserPayload,
}
