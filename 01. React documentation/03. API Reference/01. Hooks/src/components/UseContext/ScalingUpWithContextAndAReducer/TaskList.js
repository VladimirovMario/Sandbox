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

  function handleTextChange(e) {
    dispatch({
      type: 'changed',
      task: {
        ...task,
        text: e.target.value,
      },
    });
  }

  function handleIsDoneChange(e) {
    dispatch({
      type: 'changed',
      task: {
        ...task,
        done: e.target.checked,
      },
    });
  }

  function handleDelete(id) {
    dispatch({
      type: 'delete',
      id: id,
    });
  }

  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input type="text" value={task.text} onChange={handleTextChange} />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => handleIsDoneChange(e)}
      />
      {taskContent}
      <button onClick={() => handleDelete(task.id)}>Delete</button>
    </label>
  );
}
