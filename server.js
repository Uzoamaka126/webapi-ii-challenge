const express = require('express');
const router = require('./blogs/blogs-routers');
const server = express();
const cors = require('cors');

server.use(express.json());
server.use(cors());

server.use('/api/posts', router);
server.use('/', (req, res) => {
    res.send(`Welcome!`);
});

module.exports = server;