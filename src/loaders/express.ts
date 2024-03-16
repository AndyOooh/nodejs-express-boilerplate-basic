import express from 'express';
// import bodyParser from 'body-parser';
// import * as cors from 'cors';

export const expressLoader = async ({ app }: { app: express.Application }) => {
  app.get('/status', (req, res) => {
    res.status(200).send('Server is running');
  });

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
//   app.use()

  //   app.head('/status', (req, res) => { res.status(200).end(); });
  //   app.enable('trust proxy');

  //   app.use(cors());
  //   app.use(require('morgan')('dev'));
  //   app.use(bodyParser.urlencoded({ extended: false }));

  // ...More middlewares

  // Return the express app
  return app;
};
