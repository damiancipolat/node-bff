const http = require('http');
const express = require('express');
const config = require('config');

//Creat the server.
const app = express();
const server = http.createServer(app);

//Get middlewares.
const {
  health,
  proxy
} = require('./routes');

//Get values from configuration.
const {
  port
} = config.get('server');

const {
  map
} = config.get('proxy');

//Define the middlewares..
app.use('/health', health);
app.use('/', proxy(map));

//On server listen.
app.listen(port, () => {
  console.log('Server started');
});