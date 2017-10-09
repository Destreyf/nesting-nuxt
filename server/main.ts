import { NestFactory } from '@nestjs/core';
import * as Express from 'express';
import Nuxt from 'nuxt';
import config from '../nuxt.config';
import { ApplicationModule } from './modules/app.module';

async function start() {
  const instance = new Express();
  // Import and Set Nuxt.js options
  config.dev = !(instance.env === 'production');
  // Instanciate nuxt.js
  const nuxt = await new Nuxt(config);
  const app = await NestFactory.create(ApplicationModule, instance);
  await app.listen(3000, () => console.log('Application is listening on port 3000.'));
  instance.use(nuxt.render);
}

start();
