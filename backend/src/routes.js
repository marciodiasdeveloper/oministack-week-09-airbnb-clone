const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

const routes = express.Router();
const upload = multer(uploadConfig);

// GET, POST, PUT, DELETE

// req.query = Acessar query params
// req.params = Acessar route params
// req.body = acessar corpo da requisicao

routes.post('/sessions', SessionController.store);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

module.exportes = routes;