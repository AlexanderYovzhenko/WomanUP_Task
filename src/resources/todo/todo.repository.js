import Task from './todo.model';

/**
 * Returns all tasks(Task)
 * @returns array tasks
 */
const getTasksDb = async () => {
  const tasks = await Task.find({});
  return tasks;
};

/**
 * Returns object task with ID task equal taskID
 * @param taskID -first argument ID task
 * @returns Object task with ID task or null
 */
const getTaskDb = async (taskId) => {
  const task = await Task.find({ _id: taskId });
  return task;
};

/**
 * Returns array tasks of need page(Task)
 * @returns array tasks
 */
const getTasksAtPageDb = async (page) => {
  // const tasks = await Task.find({});
  // return tasks;
};

/**
 * Add object new task in array tasks(Task)
 * @param task -first argument new task
 * @returns new task
 */
const addTaskDb = async (newTask) => {
  const task = await Task.create({
    TaskRows: {
      ...newTask,
    },
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
      TaskRows: {
        ...updTask,
      },
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
