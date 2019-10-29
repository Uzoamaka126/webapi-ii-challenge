const express = require('express');
const router = require('./blogs/blogs-routers');
const server = express();

server.use(express.json());
server.use('/api/posts', router);

server.use('/', (req, res) => {
    res.send(`Welcome!`);
});

// server.post('/greet/:username', (req, res) => {
//     const { salute } = req.query;
//     const { username } = req.params;
//     const 
// })

module.exports = server;