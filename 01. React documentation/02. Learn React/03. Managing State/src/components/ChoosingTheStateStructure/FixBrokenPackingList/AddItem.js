import { useState } from 'react';

export default function AddItem({ onAddItem }) {
  const [title, setTitle] = useState('');

  return (
    <>
      <input
        type="text"
        placeholder="Add Item"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          setTitle('');
          onAddItem(title);
        }}
      >
        Add
      </button>
    </>
  );
}
