

// const express = require('express');
// require('dotenv').config({path: './.env'});    // fichier de configuration
// const app = express();
// const db = require('./models/index.js');
// //const db = require('./models');
// const app = require('./app');

// app.use(express.json());        // ou body parser , on intercepte toutes les requetes json
// app.use(express.urlencoded({    // pour version 4.16.0 et +
//     extended: true              // encodage de l'url
//   }));

// db.sequelize.sync().then(() => {

//   app.listen(process.env.PORT, () =>{
//     console.log(`Listening on port ${process.env.PORT}`);
//   })
// })


console.log('server');
const http = require('http');
const app = require('./app');

const normalizePort = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

server.listen(port);
