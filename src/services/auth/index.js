const {
  generateUuid,
  generateToken,
} = require('../../libs');

const getToken = async () => {
  const uiid = generateUuid();
  const jwtToken = await generateToken(uiid);  
  const response = {
    jwtToken,
  };
  
  return Promise.resolve(response);
};

module.exports = {
  getToken,
};
