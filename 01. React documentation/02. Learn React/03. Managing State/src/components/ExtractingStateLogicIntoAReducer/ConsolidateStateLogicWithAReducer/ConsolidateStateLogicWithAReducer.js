import { useReducer } from 'react';
import tasksReducer from './tasksReducer';
import { tasksData } from './data';
import AddTask from './AddTask';
import TaskList from './TaskList';

export default function ConsolidateStateLogicWithAReducer() {
  return (
    <>
      <h2>Consolidate state logic with a reducer</h2>
      <TaskApp />
    </>
  );
}

function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, tasksData.initialTasks);

  function handleAddTask(text) {
    dispatch({
      // "action" object:
      type: 'added',
      id: tasksData.nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      // "action" object:
      type: 'changed',
      task: task,
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      // "action" object:
      type: 'delete',
      id: taskId,
    });
  }

  return (
    <>
      <h2>Prague itinerary</h2>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
