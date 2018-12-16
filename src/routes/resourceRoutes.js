const { resourceController } = require('../controllers');
const {
  validateToken,
} = require('../middleware');

const {
  getToken,
  authenticate,
} = resourceController;

const setResourceRoutes = (routes) => {
  routes.get('/token', getToken);
  routes.post('/authenticate', validateToken, authenticate);
};

module.exports = {
  setResourceRoutes,
};
