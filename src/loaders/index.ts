import { Application } from 'express';
import { expressLoader } from './express.js';

export const initLoaders = async (app: Application) => {
  await expressLoader(app);
  console.log('Express Intialized');

  // ... more loaders can be here, e.g. agenda, Redis, Mongoos, etc.
};
