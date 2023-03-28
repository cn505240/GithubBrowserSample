import { asValue } from 'awilix';
import * as winston from 'winston';
import DependencyContainer from './dependencyContainer';
import loggerFactory from './factories/loggerFactory';
import expressServerFactory from './factories/expressServerFactory';
import { Config } from '../config/config';

async function main() {
  console.time('BOOT');
  const logger = loggerFactory();
  logger.info('Starting up the application...');

  const dependencyContainer = DependencyContainer.getInstance();
  logger.debug('Dependency container succesfully instantiated');

  let config: Config = require('../config/config.json');

  dependencyContainer.register<winston.Logger>('logger', asValue(logger));
  await expressServerFactory(dependencyContainer.cradle);

  console.timeEnd('BOOT');
}

main();
