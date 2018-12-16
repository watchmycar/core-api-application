const { resourceRepository } = require('../repository');
const token = require('../libs/token');
const idGenerator  = require('../libs/idGenerator');

const getToken = async () => {
  const id = idGenerator.generate();
  const jwtToken = await token.generateToken(id);  
  const response = {
    jwtToken,
  };
  
  return Promise.resolve(response);
}

const authenticate = () => {
  const response = {
    authenticated: true,
    message: 'You are now authenticated',
  };

  return Promise.resolve(response);
}

module.exports = {
  authenticate,
  getToken,
};
