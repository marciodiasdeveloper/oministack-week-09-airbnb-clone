const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://oministack:oministack@oministack9-95zvb.mongodb.net/oministack9?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json);
app.use(routes);

app.listen(3333);
console.log('Node server running on port 3000');