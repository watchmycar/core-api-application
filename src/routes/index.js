const Router = require('express');

const setUserRoutes = require('./user');

const routes = Router();

setUserRoutes(routes);

module.exports = routes;
