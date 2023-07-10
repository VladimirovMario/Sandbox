import { useReducer } from 'react';
import AddTask from './AddTask';
import TaskList from './TaskList';
import { TasksContext, TasksDispatchContext } from './TasksContext';

export default function CombiningAReducerWithContext() {
  return (
    <>
      <h2>Combining a reducer with context</h2>
      <TaskApp />
    </>
  );
}

function TaskApp() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        <h3>Day off in Kyoto</h3>
        <AddTask />
        <TaskList />
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, { id: action.id, text: action.text, done: false }];
    }
    case 'changed': {
      return tasks.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        } else {
          return task;
        }
      });
    }
    case 'deleted': {
      return tasks.filter((task) => task.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialTasks = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false },
];
