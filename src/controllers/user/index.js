const { userService } = require('../../services');

const CREATED_STATUS = 201;

const saveUser = async (req, res, next) => {
  try {
    const userData = req.body;
    const result = await userService.saveUser(userData);
    return res.status(CREATED_STATUS).json(result);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  saveUser,
};
