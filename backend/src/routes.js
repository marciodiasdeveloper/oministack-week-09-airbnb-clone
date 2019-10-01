const express = require('express');
const routes = express.Router();

// GET, POST, PUT, DELETE

// req.query = Acessar query params
// req.params = Acessar route params
// req.body = acessar corpo da requisicao


routes.get('/users', (req, res) => {
    return res.json(req.body);
});

module.exportes = routes;