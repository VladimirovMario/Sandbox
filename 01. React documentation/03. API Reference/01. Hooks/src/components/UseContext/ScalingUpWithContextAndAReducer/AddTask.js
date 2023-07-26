import { useState } from 'react';
import { useTasksDispatch } from './TasksContext';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();

  function handleAdd() {
    setText('');
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  return (
    <>
      <input
        type="text"
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </>
  );
}

let nextId = 3;
