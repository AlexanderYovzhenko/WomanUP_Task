import Express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import todoRoutes from './resources/todo/todo.router';
import loginRoutes from './resources/login/login.router';

export const app = new Express();

app.use(cors());

app.use(bodyParser.json());

app.use('', loginRoutes);
app.use('', todoRoutes);
