import { Request, Response, Router } from 'express';

const routes: Router = Router();

routes.get('/health', (_: Request, res: Response): Response<unknown> => {
  const data = {
    uptime: process.uptime(),
    message: 'Ok',
    date: new Date(),
  };

  return res.status(200).json({ data });
});

export { routes };
