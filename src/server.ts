import express, { Express } from 'express';
import { initLoaders } from './loaders/index.js';

const port = process.env.PORT || 8000;

const startServer = async (): Promise<void> => {
  try {
    const app: Express = express();
    await initLoaders({ expressApp: app });

    app
      .listen(port, () => {
        console.log('Server listening on port: ', port);
      })
      .on('error', (error: Error) => {
        console.log('Error starting server: ', error.message);
      });
  } catch (error) {
    throw error;
  }
};

startServer();
