import * as pbkdf2 from '@phc/pbkdf2'
import { config } from '@src/config/index'
const {
  digest,
  iterations,
  saltRounds,
} = config

const hashOptions = {
  digest,
  iterations: Number(iterations),
  saltSize: Number(saltRounds),
}

export const encrypt = plainText => pbkdf2.hash(plainText, hashOptions)

export const compareHash = (hash, plainText) => pbkdf2.verify(hash, plainText)
