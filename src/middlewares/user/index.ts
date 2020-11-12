import * as Joi from 'joi'
import { userSchema } from '@schemas/index'

export const validateUserPayload = async (req, res, next) => {
  const { body: userPayload } = req
  try {
    await Joi.validate(userPayload, userSchema)
    return next()
  } catch (error) {
    const BAD_REQUEST_CODE = 400

    const errorPayload = {
      statusCode: BAD_REQUEST_CODE,
      error: 'Bad Request',
      message: error.details[0].message,
    }

    return res.status(BAD_REQUEST_CODE).json(errorPayload)
  }
}
