const Router = require('express');

const { setAuthRoutes } = require('./auth');

const routes = Router();

setAuthRoutes(routes);

module.exports = routes;
