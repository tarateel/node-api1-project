// implement your API here

// library
const express = require('express');

// database file
const users = require('./data/db.js');

// global object
const server = express();

// middleware
server.use(express.json());



// listen on port 3000
server.listen(3000, () => {
  console.log('Server is running on port 3000.');
});
