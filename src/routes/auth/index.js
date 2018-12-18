const { authController }= require('../../controllers');

const {
  getToken,
} = authController;

const setAuthRoutes = (routes) => {
  routes.get('/auth/token', getToken);
};

module.exports = setAuthRoutes;