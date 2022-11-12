const http = require('http');
const express = require('express');
const next = require('next');
const helmet = require('helmet');
const compression = require('compression');
const methodOverride = require('method-override');
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production';

const appNext = next({ dev });

const handle = appNext.getRequestHandler();

const port = process.env.PORT || 3000;

const run = async () => {
  await appNext.prepare();

  const app = express();

  app.set('json spaces', 2);
  app.set('subdomain offset', 1);

  app.use(helmet());
  app.use(compression());
  app.use(methodOverride());
  app.use(cors({ origin: '*' }));
  app.use(express.json());

  app.on('error', error => {
    switch (error.code) {
      case 'EACCES':
        console.error(`${port} requires elevated privileges`);
        return process.exit(1);

      case 'EADDRINUSE':
        console.error(`${port} is already in use`);
        return process.exit(1);

      default:
        throw error;
    }
  });

  app.all('*', handle);

  const httpServer = http.createServer(app);

  httpServer.listen(port, error => {
    if (error) throw error;

    console.log(`amaui docs started 🌱 at port ${port}`);
  });

  process.on('unhandledRejection', error => {
    console.log('!! Unhandled Rejection !!', error);
  });

  process.on('uncaughtException', error => {
    console.log('!! Uncaught Exception !!', error);
  });
};

run();
