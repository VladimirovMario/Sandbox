import { useState } from 'react';

export default function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState('');

  return (
    <>
      <input
        type="text"
        placeholder="Add todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          setTitle('');
          onAddTodo(title);
        }}
      >
        Add
      </button>
    </>
  );
}
