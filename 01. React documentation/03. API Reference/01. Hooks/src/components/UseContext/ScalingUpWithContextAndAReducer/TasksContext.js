import { createContext, useContext, useReducer } from 'react';
import { tasksReducer } from './tasksReducer';
import { initialTasks } from './tasksData';

const TasksContext = createContext(null);

const TasksDispatchContext = createContext(null);

function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

function useTasks() {
  return useContext(TasksContext);
}

function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

export { TaskProvider, useTasks, useTasksDispatch };
