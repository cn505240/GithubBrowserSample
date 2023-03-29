import { Router } from 'express';
import notFoundMiddleware from '../middlewares/notFound';

interface IIndexRouterArgs {
  healthRouter: Router;
  githubRouter: Router;
}

function createIndexRouter(services: IIndexRouterArgs) {
  const indexRouter = Router();

  indexRouter.use('/health', services.healthRouter);
  indexRouter.use('/github', services.githubRouter);
  indexRouter.use('*', notFoundMiddleware);

  return indexRouter;
}

export default createIndexRouter;
