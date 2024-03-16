import { Application } from 'express';
import { expressLoader } from './express.js';

export const initLoaders = async (app: Application) => {
  await expressLoader(app);
  console.log('Express Intialized');

  // ... more loaders can be here

  // ... Initialize agenda
  // ... or Redis, or whatever you want
};
