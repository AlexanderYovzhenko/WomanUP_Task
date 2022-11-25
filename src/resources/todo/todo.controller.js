import mongoose from 'mongoose';
import statusCode from '../../common/status.code';
import {
  addTaskDb,
  deleteTaskDb,
  getTaskDb,
  getTasksAtPageDb,
  getTasksDb,
  updateTaskDb,
} from './todo.repository';

const getTasks = async (req, res) => {
  const { param = '' } = req.query;
  const tasks = await getTasksDb(param);
  res.header('Access-Control-Allow-Origin', '*');
  res.status(statusCode.OK).send(tasks);
};

const getTask = async (req, res) => {
  const { taskId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(taskId)) {
    res.status(statusCode.BAD_REQUEST).send('ID is not valid');
  } else {
    const task = await getTaskDb(taskId);
    res.header('Access-Control-Allow-Origin', '*');
    res.status(statusCode.OK).send(task);
  }
};

const getTasksAtPage = async (req, res) => {
  const pageParam = req.params.page;
  const page =
    pageParam && typeof (pageParam === 'number') && +pageParam !== 0
      ? pageParam
      : 1;
  const amountItemAtPage = 3;
  const numberStartTasks = page * amountItemAtPage - amountItemAtPage;
  const tasks = await getTasksAtPageDb(numberStartTasks, amountItemAtPage);
  res.header('Access-Control-Allow-Origin', '*');
  res.status(statusCode.OK).send(tasks);
};

const addTask = async (req, res) => {
  const newTask = req.body;
  const task = await addTaskDb(newTask);
  res.header('Access-Control-Allow-Origin', '*');
  res.status(statusCode.CREATED).send(task);
};

const updateTask = async (req, res) => {
  const { taskId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(taskId)) {
    res.status(statusCode.BAD_REQUEST).send('ID is not valid');
  } else {
    const updateTask = req.body;
    await updateTaskDb(taskId, updateTask);
    res.header('Access-Control-Allow-Origin', '*');
    res.status(statusCode.CREATED).send(await getTaskDb(taskId));
  }
};

const deleteTask = async (req, res) => {
  const { taskId } = req.params;
  if (!mongoose.Types.ObjectId.isValid(taskId)) {
    res.status(statusCode.BAD_REQUEST).send('ID is not valid');
  } else {
    await deleteTaskDb(taskId);
    res.header('Access-Control-Allow-Origin', '*');
    res.status(statusCode.NO_CONTENT).send();
  }
};

export { getTasks, getTask, getTasksAtPage, addTask, updateTask, deleteTask };
