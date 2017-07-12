import { NestFactory } from '@nestjs/core';
import * as Express from 'express';
import { ApplicationModule } from './modules/app.module';

// tslint:disable-next-line:no-var-requires
const Nuxt = require('nuxt');

async function start() {
  const instance = new Express();
  // Import and Set Nuxt.js options
  const config = require('../nuxt.config');
  config.dev = !(instance.env === 'production');
  // Instanciate nuxt.js
  const nuxt = await new Nuxt(config);
  instance.use(nuxt.render);

  const app = NestFactory.create(ApplicationModule, instance);
  app.listen(3000, () => console.log('Application is listening on port 3000.'));
}

start();
