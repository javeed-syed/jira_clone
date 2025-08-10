import 'module-alias/register';
import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';

import createDatabaseConnection from 'database/createConnection';
import { addRespondToResponse } from 'middleware/response';
import { authenticateUser } from 'middleware/authentication';
import { handleError } from 'middleware/errors';
import { RouteNotFoundError } from 'errors';

import { attachPublicRoutes, attachPrivateRoutes } from './routes';
import createGuestAccount from 'database/createGuestAccount';

const establishDatabaseConnection = async (): Promise<void> => {
  try {
    await createDatabaseConnection();
    await createGuestAccount();
  } catch (error) {
    console.log(error);
  }
};

const PORT = process.env.PORT || 3000;

const initializeExpress = (): void => {
  const app = express();

  app.use(cors({ origin: '*', methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH'] }));
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(addRespondToResponse);

  attachPublicRoutes(app);

  app.use('/', authenticateUser);

  attachPrivateRoutes(app);
  app.use((req, _res, next) => next(new RouteNotFoundError(req.originalUrl)));
  app.use(handleError);

  app.listen(PORT, () => {
    console.log(`Api is running on ${PORT}`);
    if (process.env.NODE_ENV === 'development') {
      console.warn('⚠️ NODE_ENV is development — make sure this is intentional!');
    }
  });
};

const initializeApp = async (): Promise<void> => {
  await establishDatabaseConnection();
  initializeExpress();
};

initializeApp();
