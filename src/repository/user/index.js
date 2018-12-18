
const CommonRepository = require('../common');
const { userModel } = require('../../models');
const userRepository = new CommonRepository(userModel);

module.exports = userRepository;
