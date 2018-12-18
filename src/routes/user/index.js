const { userController } = require('../controllers');

const {
  saveUser,
} = userController;

const setUserRoutes = (routes) => {
  routes.post('/user', saveUser);
};

module.exports = setUserRoutes;
