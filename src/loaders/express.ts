import express, { Application } from 'express';

export const expressLoader = async (app: Application) => {
  app.get('/status', (req, res) => {
    res.status(200).send('Server is running');
  });

  app.use(express.json());

  return app;
};
