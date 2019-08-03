const { userController } = require('../../controllers');
const { validateUserPayload } = require('../../middleware');

const {
  saveUser,
} = userController;

const setUserRoutes = (routes) => {
  routes.post('/user', validateUserPayload, saveUser);
};

module.exports = setUserRoutes;
