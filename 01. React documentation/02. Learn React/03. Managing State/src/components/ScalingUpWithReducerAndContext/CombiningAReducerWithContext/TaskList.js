import { useState } from 'react';
import { useTasks, useTasksDispatch } from './TasksContext';

export default function TaskList() {
  const tasks = useTasks();
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();

  let taskContent = (
    <>
      {isEditing ? (
        <input
          type="text"
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: 'changed',
              task: { ...task, text: e.target.value },
            });
          }}
        />
      ) : (
        <span>{task.text}</span>
      )}
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </>
  );

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          dispatch({
            type: 'changed',
            task: { ...task, done: e.target.checked },
          });
        }}
      />
      {taskContent}
      <button onClick={() => dispatch({ type: 'deleted', id: task.id })}>
        Delete
      </button>
    </label>
  );
}
