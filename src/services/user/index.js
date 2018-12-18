const { merge } = require('ramda');
const { encrypt } = require('../../libs/security');
const { generate: generateId } = require('../../libs/idGenerator');
const userRepository = require('../../repository');

const saveUser = async (userData) => {
  const { password } = userData;
  try {
    const encryptedPassword = await encrypt(password);
  
    const mergeableUserData = { 
      _id: generateId(),
      password: encryptedPassword, 
    };
  
    const userPayload = merge(userData, mergeableUserData);
    
    const savedUser = await userRepository.save(userPayload);
    return {

    }
  } catch (error) {
    // TODO: Use error lib
  }
};

module.exports = {
  saveUser,
}