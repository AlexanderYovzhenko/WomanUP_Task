import Express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import todoRoutes from './resources/todo/todo.router';
import loginRoutes from './resources/login/login.router';
import { checkToken } from './tokens/check.token';

export const app = new Express();

app.use(cors());

app.use(bodyParser.json());

app.use('', checkToken);

app.use('', loginRoutes);
app.use('', todoRoutes);
