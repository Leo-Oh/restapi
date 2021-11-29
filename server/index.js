const cors = require('cors');
const express = require('express');
const routes = require('../routes');

const server = express();
server.use(cors());
server.options('*',cors());
server.use(express.json());
server.use('/users-api',routes);

module.exports = server;