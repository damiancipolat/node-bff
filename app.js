/*
const http    = require('http');
const express = require('express');
const config  = require('config');

const { 
  createProxyMiddleware 
} = require('http-proxy-middleware');

//Creat the server.
const app     = express();
const server  = http.createServer(app);

//Get the server port.
const {
  port
} = config.get('server');

//Set middlewares.
app.use('/test',(req,res)=>{
  res.json({mock:true});
});

app.use('/proxy', createProxyMiddleware({
   target: 'https://5f3a062e2300b100169a84f7.mockapi.io/*',
   changeOrigin: true
}));

//On server listen.
app.listen(port,()=>{
  console.log('Server started');
});
*/

/*
  ROUTES:
  127.0.0.1:8080/clients ---> 192.168.0.1:5000/

  http://petstore.swagger.io/v2/pet/1

  curl 127.0.0.1:8080/proxy/pet/1

*/

const express = require('express');
const {
  createProxyMiddleware
} = require('http-proxy-middleware');

/**
 * Configure proxy middleware
 */
const jsonPlaceholderProxy = createProxyMiddleware({
  target: 'http://jsonplaceholder.typicode.com',
  changeOrigin: true, // for vhosted sites, changes host header to match to target's host,
  pathRewrite: {
    '/m1': ''
  },
  logLevel: 'debug',
});

const app = express();

/**
 * Add the proxy to express
 */
app.use('/m1', jsonPlaceholderProxy);

app.listen(3000);

console.log('[DEMO] Server: listening on port 3000');
console.log('[DEMO] Opening: http://localhost:3000/users');