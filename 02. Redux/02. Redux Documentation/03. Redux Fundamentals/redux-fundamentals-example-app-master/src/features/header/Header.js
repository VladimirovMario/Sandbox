import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveNewTodo } from '../todos/todosSlice';

export default function Header() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    const trimmedText = e.target.value.trim();

    // If the user pressed the Enter key:
    if (e.which === 13 && trimmedText) {
      // Create the thunk function and immediately dispatch it
      dispatch(saveNewTodo(trimmedText));
      setText('');
    }
  };

  return (
    <header className="header">
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </header>
  );
}
