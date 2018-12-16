const Joi = require('joi');
const { resourceSchema } = require('../schemas');

const validateResourcePayload = async (req, res, next) => {
  const { body: resourcePayload } = req;
  try {
    await Joi.validate(resourcePayload, resourceSchema);
    return next();
  } catch (error) {
    const BAD_REQUEST_CODE = 400;

    const errorPayload = {
      statusCode: BAD_REQUEST_CODE,
      error: 'Bad Request',
      message: error.details[0].message,
    };

    return res.status(BAD_REQUEST_CODE).json(errorPayload);
  }
};

module.exports = validateResourcePayload;
