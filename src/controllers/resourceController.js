const { resourceService } = require('../services');

const OK_STATUS = 200

const authenticate = async (req, res, next) => {
  try {
    const result = await resourceService.authenticate()
    return res.status(OK_STATUS).json(result)
  } catch (error) {
    return next(error)
  }
};

const getToken = async (req, res, next) => {
  try {
    const result = await resourceService.getToken()
    return res.status(OK_STATUS).json(result)
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  authenticate,
  getToken,
};
