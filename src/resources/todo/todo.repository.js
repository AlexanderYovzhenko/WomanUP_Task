import Task from './todo.model';

/**
 * Returns all tasks(Task)
 * @param paramFilter param is filter
 * @returns array tasks
 */
const getTasksDb = async (paramFilter) => {
  if (paramFilter) {
    const templateFilterJSON = `{ 
      "${paramFilter}": {
        "$exists": true
      }}
    `;
    const tasks = await Task.find(JSON.parse(templateFilterJSON));
    return tasks;
  } else {
    const tasks = await Task.find();
    return tasks;
  }
};

/**
 * Returns object task with ID task equal taskID
 * @param taskID first argument ID task
 * @returns Object task with ID task or null
 */
const getTaskDb = async (taskId) => {
  const task = await Task.find({ _id: taskId });
  return task;
};

/**
 * Returns array tasks of need page(Task)
 * @param numberStartTasks number start need task
 * @param amountItemAtPage amount task in page
 * @returns array tasks
 */
const getTasksAtPageDb = async (numberStartTasks, amountItemAtPage) => {
  const tasks = await Task.find()
    .skip(numberStartTasks)
    .limit(amountItemAtPage);
  return tasks;
};

/**
 * Add object new task in array tasks(Task)
 * @param task first argument new task
 * @returns new task
 */
const addTaskDb = async (newTask) => {
  const task = await Task.create({
    ...newTask,
  });
  return task;
};

/**
 * Update object task with ID task equal taskID in array tasks(Task)
 * @param taskID first argument ID task
 * @param updTask second argument object update task
 * @returns updateTask
 */
const updateTaskDb = async (taskId, updTask) => {
  const updateTask = await Task.updateOne(
    { _id: taskId },
    {
      ...updTask,
    }
  );
  return updateTask;
};

/**
 * Delete object task with ID task equal taskID in array tasks(Task)
 * @param taskID first argument ID task
 * @returns void
 */
const deleteTaskDb = async (taskId) => {
  const removeTask = await Task.findOne({ _id: taskId }).exec();
  if (removeTask) {
    await removeTask.remove();
  }
};

export {
  getTasksDb,
  getTaskDb,
  getTasksAtPageDb,
  addTaskDb,
  updateTaskDb,
  deleteTaskDb,
};
