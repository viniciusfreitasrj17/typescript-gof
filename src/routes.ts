import { Request, Response, Router } from 'express';
import { accountController } from './controllers/AccountController';

const routes: Router = Router();

// Health Routes
routes.get('/health', (_: Request, res: Response): Response<unknown> => {
  const data = {
    uptime: process.uptime(),
    message: 'Ok',
    date: new Date(),
  };

  return res.status(200).json({ data });
});

// Account Routes
routes.get('/accounts', accountController.show);
routes.post('/accounts', accountController.add);
routes.delete('/accounts/:index', accountController.remove);

export { routes };
