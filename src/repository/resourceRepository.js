const CommonRepository = require('./common');
const { resourceModel } = require('../models');

const resourceRepository = new CommonRepository(resourceModel);

module.exports = resourceRepository;
