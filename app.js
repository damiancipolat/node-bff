const http = require('http');
const express = require('express');
const config = require('config');
const morgan = require('morgan');

//Creat the server.
const app = express();
const server = http.createServer(app);
app.use(morgan("default"));

//Get middlewares.
const {
  health,
  proxy
} = require('./routes');

const {
  notFound
} = require('./middleware');

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
app.use('*', notFound);

//On server listen.
app.listen(port, () => {
  console.log('BFF - Server started');
  console.log('Listen on port:' + port);
});