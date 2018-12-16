const { v4 } = require('uuid');

const generate = () => v4();

module.exports = {
  generate,
};
