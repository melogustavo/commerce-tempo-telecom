/* eslint-disable no-console */
import 'reflect-metadata';

import express from 'express';

import routes from './routes';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3001, () => {
  console.log('Server is runing on port 3001');
});