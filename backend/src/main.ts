import { asValue } from 'awilix';
import * as winston from 'winston';
import DependencyContainer from './dependencyContainer';
import loggerFactory from './factories/loggerFactory';
import expressServerFactory from './factories/expressServerFactory';
import { Config } from '../config/config';
import GithubClient from './clients/github/client';

async function main() {
  console.time('BOOT');
  const logger = loggerFactory();
  logger.info('Starting up the application...');

  const dependencyContainer = DependencyContainer.getInstance();
  logger.debug('Dependency container succesfully instantiated');

  let config: Config = require('../config/config.json');
  const githubClient: GithubClient = new GithubClient(config);

  dependencyContainer.register<winston.Logger>('logger', asValue(logger));
  dependencyContainer.register<GithubClient>('githubClient', asValue(githubClient));
  await expressServerFactory(dependencyContainer.cradle);

  console.timeEnd('BOOT');
}

main();
