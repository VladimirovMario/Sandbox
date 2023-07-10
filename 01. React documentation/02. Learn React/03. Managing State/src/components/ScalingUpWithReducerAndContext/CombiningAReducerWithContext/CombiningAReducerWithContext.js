import AddTask from './AddTask';
import TaskList from './TaskList';
import TasksProvider from './TasksContext';

export default function CombiningAReducerWithContext() {
  return (
    <>
      <h2>Combining a reducer with context</h2>
      <TaskApp />
    </>
  );
}

function TaskApp() {
  return (
    <TasksProvider>
      <h3>Day off in Kyoto</h3>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
