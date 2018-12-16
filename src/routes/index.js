const Router = require('express');
const { setResourceRoutes } = require('./resourceRoutes');

const routes = Router();

setResourceRoutes(routes);

module.exports = routes;
