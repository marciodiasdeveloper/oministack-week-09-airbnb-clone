const express = require('express');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// GET, POST, PUT, DELETE

// req.query = Acessar query params
// req.params = Acessar route params
// req.body = acessar corpo da requisicao

routes.get('/users', SessionController.store);

module.exportes = routes;