const { promisify } = require('util')
const { sign } = require('jsonwebtoken');
const signWithPromise = promisify(sign)

const { jwtSecret, expiringTime } = require('../../config');

const generateToken = (content) => {
  const payload = {
    data: content,
  };

  const options = {
    expiresIn: Number(expiringTime),
  };

  return signWithPromise(payload, jwtSecret, options);
};

module.exports = {
  generateToken,
};
