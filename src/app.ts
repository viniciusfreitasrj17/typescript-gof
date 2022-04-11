import express from 'express';
import morgan from 'morgan';
import { routes } from './routes';

const app: express.Express = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(routes);

export { app };
