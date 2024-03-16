import { Express } from 'express';

import expressLoader from './express';
// import mongooseLoader from './mongoose';

type initParams = {
  expressApp: Express;
};

export const initLoaders = async ({ expressApp }: initParams) => {
  //   const mongoConnection = await mongooseLoader();
  console.log('MongoDB Intialized');
  await expressLoader({ app: expressApp });
  console.log('Express Intialized');

  // ... more loaders can be here

  // ... Initialize agenda
  // ... or Redis, or whatever you want
};
