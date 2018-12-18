const { authService } = require('../../services');

const OK_STATUS = 200

const getToken = async (req, res, next) => {
  try {
    const result = await authService.getToken()
    return res.status(OK_STATUS).json(result)
  } catch (error) {
    return next(error)
  }
}

module.exports = {
  getToken,
};
