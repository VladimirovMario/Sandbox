import { useState } from 'react';

export default function AddTodo({ onAddTodo }) {
  const [text, setText] = useState('');

  function onAddClick() {
    if (text !== '') {
      onAddTodo(text);
      setText('');
    } else {
      alert('Please fill the field.');
    }
  }

  return (
    <>
      <input
        type="text"
        placeholder="Add todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={onAddClick}>Add</button>
    </>
  );
}
