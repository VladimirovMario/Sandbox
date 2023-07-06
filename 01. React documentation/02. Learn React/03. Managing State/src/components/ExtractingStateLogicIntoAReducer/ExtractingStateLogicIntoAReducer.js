import { useState } from 'react';
import ConsolidateStateLogicWithAReducer from './ConsolidateStateLogicWithAReducer/ConsolidateStateLogicWithAReducer';
import AddTask from './ConsolidateStateLogicWithAReducer/AddTask';
import TaskList from './ConsolidateStateLogicWithAReducer/TaskList';

export default function ExtractingStateLogicIntoAReducer() {
  return (
    <>
      <h1>Extracting State Logic into a Reducer</h1>
      <ConsolidateStateLogicWithAReducer />
      <TaskApp />
    </>
  );
}

function TaskApp() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(text) {
    setTasks([...tasks, { id: nextId++, text: text, done: false }]);
  }

  function handleChangeTask(task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((t) => t.id !== taskId));
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

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];
