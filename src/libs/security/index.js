const pbkdf2 = require('@phc/pbkdf2')
const {
  digest,
  iterations,
  saltRounds,
} = require('@config')

const hashOptions = {
  digest,
  iterations: Number(iterations),
  saltSize: Number(saltRounds),
}

const encrypt = plainText => pbkdf2.hash(plainText, hashOptions)

const compareHash = (hash, plainText) => pbkdf2.verify(hash, plainText)

module.exports = {
  encrypt,
  compareHash,
}
