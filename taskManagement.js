//Filter ve Foreach

const createTaskManager = () => {
  //Tasks
  let tasks = [];

  //Add Task
  const addTask = (value) => {
    tasks = [...tasks, { value, completed: false }];
  };

  //Complete
  const completeTask = (index) => {
    tasks[index] && (tasks[index].completed = true);
  };

  //Delete
  const deleteCompletedTasks = () => {
    tasks = tasks.filter((value) => !value.completed);
  };

  //View all tasks
  const viewTasks = () => {
    console.log("Tasks:");
    tasks.forEach((value, index) => {
      console.log(
        `${index + 1}. ${value.completed ? "[X]" : "[ ]"} ${value.value}`
      );
    });
  };

  return { addTask, completeTask, deleteCompletedTasks, viewTasks };
};

const taskManager = createTaskManager();

taskManager.addTask("Write Javascript Project");
taskManager.addTask("Learn Array Methods");
taskManager.addTask("Complete coding challange");

taskManager.completeTask(1);
taskManager.viewTasks();

taskManager.deleteCompletedTasks();
taskManager.viewTasks();
