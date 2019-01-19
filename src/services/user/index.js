
const { badRequest } = require('boom');
const { merge } = require('ramda');

const {
  generateUuid,
  security,
} = require('../../libs');

const { userRepository } = require('../../repository');
const { encrypt } = security

const saveUser = async (userData) => {
  const { password } = userData;

  try {
    const encryptedPassword = await encrypt(password);
    const mergeableUserData = { 
      _id: generateUuid(),
      terminalId: `terminal-${generateUuid()}`,
      password: encryptedPassword,
    };

    const userPayload = merge(userData, mergeableUserData);
    const savedUser = await userRepository.save(userPayload);
    const userResponse = {
      id: savedUser._id,
      email: savedUser.email,
      terminalId: savedUser.terminalId,
      createdAt: savedUser._created_at,
    }

    return userResponse;
  } catch (error) {
      const DUPLICATED_EMAIL_CODE = 11000;
  
      if (error.code === DUPLICATED_EMAIL_CODE) {
          throw badRequest('User already exists');
      }
  
      throw error;
  }
};

module.exports = {
  saveUser,
}