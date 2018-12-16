const token = require('../../libs/token');
const idGenerator  = require('../../libs/idGenerator');

const getToken = async () => {
  const id = idGenerator.generate();
  const jwtToken = await token.generateToken(id);  
  const response = {
    jwtToken,
  };
  
  return Promise.resolve(response);
};

module.exports = {
  getToken,
};
