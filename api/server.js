const express = require('express');
const helmet = require('helmet');

const birdsRouter = require('../birds/birds-router');


const server = express();


server.use(helmet());
server.use(express.json());

server.use('/api/birds', birdsRouter)

server.get('/', (req, res) => {
  res.send("Working.");
});

module.exports = server;
