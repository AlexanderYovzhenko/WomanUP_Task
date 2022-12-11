import express from 'express';
import statusCode from '../../common/status.code.js';
import {
  addTask,
  deleteTask,
  getTask,
  getTasks,
  getTasksAtPage,
  updateTask,
} from './todo.controller.js';

const router = express.Router();

router.get('/', (_, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.status(statusCode.OK).send('Service is running!');
});

router.get('/todo', getTasks);
router.get('/todo/:taskId', getTask);
router.get('/todo/page/:page', getTasksAtPage);
router.post('/todo', addTask);
router.put('/todo/:taskId', updateTask);
router.delete('/todo/:taskId', deleteTask);

router.get('/*', (_, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.status(statusCode.NOT_FOUND).send('Page not found!');
});

export default router;
