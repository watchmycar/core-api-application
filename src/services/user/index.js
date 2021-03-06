
const { 
  badRequest,
  unauthorized,
} = require('boom');
const { merge } = require('ramda');

const {
  generateUuid,
  generateToken,
  security,
} = require('../../libs');

const { userRepository } = require('../../repository');
const {
  compareHash, 
  encrypt,
} = security

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

const login = async ({ email, password })=> {
  const userFilter = {
    email,
  };

  const checkUserCredentials = async (user) => {
    if (user) {
      const validUser = await compareHash(user.password, password);
      if (validUser) {
        return Promise.resolve();
      }

      throw unauthorized('Invalid credentials');
    }
  
    throw unauthorized('Invalid credentials');
  };
  
  try {
    const user = await userRepository.findOne(userFilter);
    await checkUserCredentials(user, password);
    const jwtToken = await generateToken(user._id);
    const loginResponse = {
      logged: true,
      token: jwtToken,
    };
    return loginResponse;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = {
  login,
  saveUser,
};