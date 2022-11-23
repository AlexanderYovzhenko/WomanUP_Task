import statusCode from "../../common/status.code";

const getTasks = async(_, res) => {
  const tasks = await getTasksDb();
  res.header('Access-Control-Allow-Origin', '*');
  res.status(statusCode.OK).send(tasks);
};

const getTask = async(req, res) => {
  const { taskId } = req.params;
  const task = await getTaskDb(taskId);
  res.header('Access-Control-Allow-Origin', '*');
  res.status(statusCode.OK).send(task);
};

const getTasksAtPage = async(req, res) => {
  const { page } = req.params;
  const tasks = await getTasksAtPageDb(page);
  res.header('Access-Control-Allow-Origin', '*');
  res.status(statusCode.OK).send(tasks);
};

const addTask = async(req, res) => {
  const task = await addTaskDb();
  res.header('Access-Control-Allow-Origin', '*');
  res.status(statusCode.CREATED).send(task);
};

const updateTask = async(req, res) => {
  const { taskId } = req.params;
  const task = await updateTaskDb(taskId);
  res.header('Access-Control-Allow-Origin', '*');
  res.status(statusCode.CREATED).send(task);
};

const deleteTask = async(req, res) => {
  const { taskId } = req.params;
  await deleteTaskDb(taskId);
  res.header('Access-Control-Allow-Origin', '*');
  res.status(statusCode.NO_CONTENT).send();
};

export {
  getTasks,
  getTask,
  getTasksAtPage,
  addTask,
  updateTask,
  deleteTask
}
