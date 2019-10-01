const express = require('express');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

const routes = express.Router();

// GET, POST, PUT, DELETE

// req.query = Acessar query params
// req.params = Acessar route params
// req.body = acessar corpo da requisicao

routes.post('/sessions', SessionController.store);
routes.post('/spots', SpotController.store);

module.exportes = routes;