import { userService } from '@services/index'

const CREATED_STATUS = 201
const OK_STATUS = 200

export const saveUser = async (req, res, next) => {
  try {
    const userData = req.body
    const result = await userService.saveUser(userData)
    return res.status(CREATED_STATUS).json(result)
  } catch (error) {
    return next(error)
  }
}

export const auth = async (req, res, next) => {
  try {
    const userData = req.body
    const result = await userService.authUser(userData)
    return res.status(OK_STATUS).json(result)
  } catch (error) {
    return next(error)
  }
}

