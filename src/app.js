import Express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import todoRoutes from './resources/todo/todo.router';

export const app = new Express();

app.use(cors());

app.use(bodyParser.json());

app.use('', todoRoutes);
