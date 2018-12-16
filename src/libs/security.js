const bcryptjs = require('bcryptjs');
const { saltRounds } = require('../../config');

const encrypt = plainText => bcryptjs.hash(plainText, saltRounds);

const compareHash = (plainText, hash) => bcryptjs.compare(plainText, hash);

module.exports = {
  encrypt,
  compareHash,
};
