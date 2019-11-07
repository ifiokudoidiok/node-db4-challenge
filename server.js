const express = require('express');

// const recipeBookRouter = require('./config/router');

const server = express();

server.use(express.json());
// server.use('/api', recipeBookRouter);

module.exports = server;