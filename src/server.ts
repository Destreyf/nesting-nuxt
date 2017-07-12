import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './modules/app.module';
import * as Express from 'express';
const Nuxt = require('nuxt');


async function start() {
  const instance = new Express();
  // Import and Set Nuxt.js options
  let config = require('../nuxt.config');
  config.dev = !(instance.env === 'production');
  // Instanciate nuxt.js
  const nuxt = await new Nuxt(config);
  instance.use(nuxt.render);

  const app = NestFactory.create(ApplicationModule, instance);
  app.listen(3000, () => console.log('Application is listening on port 3000.'));
}

start();
