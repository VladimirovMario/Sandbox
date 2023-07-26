import AddTask from './AddTask';
import TaskList from './TaskList';
import { TaskProvider } from './TasksContext';

export default function ScalingUpWithContextAndAReducer() {
  return (
    <>
      <h2>Example 5 of 5: Scaling up with context and a reducer</h2>
      <TaskApp />
    </>
  );
}

function TaskApp() {
  return (
    <>
      <TaskProvider>
        <h3>Day off in Kyoto</h3>
        <AddTask />
        <TaskList />
      </TaskProvider>
    </>
  );
}
