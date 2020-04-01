const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const server = express();

// Mongoose não aceita a string connection abaixo, tive que usar versão anterior
//mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-gou8m.mongodb.net/omnistack8?retryWrites=true&w=majority', {useNewUrlParser:true});
mongoose.connect('mongodb://omnistack:omnistack@cluster0-shard-00-00-gou8m.mongodb.net:27017,cluster0-shard-00-01-gou8m.mongodb.net:27017,cluster0-shard-00-02-gou8m.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {useNewUrlParser:true});

server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(3333);