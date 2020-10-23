const { userService } = require('../../services')

const CREATED_STATUS = 201
const OK_STATUS = 200

const saveUser = async (req, res, next) => {
  try {
    const userData = req.body
    const result = await userService.saveUser(userData)
    return res.status(CREATED_STATUS).json(result)
  } catch (error) {
    return next(error)
  }
}

const login = async (req, res, next) => {
  try {
    const userData = req.body
    const result = await userService.login(userData)
    return res.status(OK_STATUS).json(result)
  } catch (error) {
    return next(error)
  }
}

// implement social login
const socialLogin = async (req, res, next) => {}

module.exports = {
  login,
  saveUser,
}
