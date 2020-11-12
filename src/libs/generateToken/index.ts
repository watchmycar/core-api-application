import { promisify } from 'util'
import { sign } from 'jsonwebtoken'
import { config } from '@src/config'
const signWithPromise = promisify(sign)
const { jwtSecret, expiringTime } = config

export const generateToken = (content) => {
  const payload = {
    data: content,
  }

  const options = {
    expiresIn: Number(expiringTime),
  }

  return signWithPromise(payload, jwtSecret, options)
}

