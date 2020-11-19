import { promisify } from 'util'
import * as jsonwebtoken from 'jsonwebtoken'
const verifyWithPromise = promisify(jsonwebtoken.verify)
import { config } from '@src/config/index'

const { jwtSecret } = config

export const validateToken = async (req, res, next) => {
  try {
    const decodedToken = await verifyWithPromise(req.token, jwtSecret)
    req.userIdentifier = decodedToken.data
    return next()
  } catch (err) {
    const BAD_REQUEST_CODE = 400
    const NOT_AUTHORIZED_CODE = 401

    if (err.name === 'TokenExpiredError') {
      const errorPayload = {
        statusCode: BAD_REQUEST_CODE,
        error: 'Bad Request',
        message: 'Invalid session',
      }
      
      return res.status(BAD_REQUEST_CODE).json(errorPayload)
    }

    const errorPayload = {
      statusCode: NOT_AUTHORIZED_CODE,
      error: 'Unauthorized',
      message: 'Invalid token',
    }

    return res.status(NOT_AUTHORIZED_CODE).json(errorPayload)
  }
}
