const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');
const socketio = require('socket.io');
const http = require('http');
const app = express();
const server = http.Server(app);
const io = socketio(server);

mongoose.connect('mongodb+srv://oministack:oministack@oministack9-95zvb.mongodb.net/oministack9?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connectUsers = {};

io.on('connection', socket => {
    const { user_id } = socket.handshake.query;
    connectedUsers[user_id] = socket.id;
});

app.use((req,res,next) => {
    req.io = io;
    req.connectUsers = connectUsers;
    return next();
});

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

server.listen(3333, function() {
    console.log('Node server running on port http://localhost:3333/');
});
