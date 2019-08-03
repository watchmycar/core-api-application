const Router = require('express');

const setAuthRoutes = require('./auth');
const setUserRoutes = require('./user');

const routes = Router();

setAuthRoutes(routes);
setUserRoutes(routes);

module.exports = routes;
