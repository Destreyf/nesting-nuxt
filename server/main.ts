import { NestFactory } from '@nestjs/core';
import * as config from '../nuxt.config';
import { ApplicationModule } from './modules/app.module';

// tslint:disable-next-line:no-var-requires
const { Builder, Nuxt } = require('nuxt');

async function bootstrap() {
  // Import and Set Nuxt.js options
  // Instanciate nuxt.js
  const nuxt = await new Nuxt(config);
  config.dev = !(process.env.NODE_ENV === 'production');
  if (config.dev) {
    new Builder(nuxt).build()
  }
  const app = await NestFactory.create(ApplicationModule);
  await app.listen(3000, () => console.log('Application is listening on port 3000.'));
  app.use(nuxt.render);
}

bootstrap();
