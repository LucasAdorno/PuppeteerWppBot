const express = require('express');

const routes = express.Router();

routes.get('/results', testController.index)

module.exports = routes;