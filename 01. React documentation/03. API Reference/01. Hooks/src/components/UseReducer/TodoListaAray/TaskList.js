import { useState } from 'react';

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <label>
              <input
                type="checkbox"
                checked={task.done}
                onChange={(e) => {
                  onChangeTask({ ...task, done: e.target.checked });
                }}
              />
              {isEditing ? (
                <>
                  <input
                    type="text"
                    value={task.text}
                    onChange={(e) =>
                      onChangeTask({ ...task, text: e.target.value })
                    }
                  />
                  <button onClick={() => setIsEditing(false)}>Save</button>
                </>
              ) : (
                <>
                  {task.text}
                  <button onClick={() => setIsEditing(true)}>Edit</button>
                  <button onClick={() => onDeleteTask(task.id)}>Delete</button>
                </>
              )}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}
