import { useSelector, useDispatch } from 'react-redux';
import { availableColors, capitalize } from '../filters/colors';
import { ReactComponent as TimesSolid } from './times-solid.svg';

const selectTodoById = (state, todoId) => {
  return state.todos.find((todo) => todo.id === todoId);
};

export default function TodoListItem({ id }) {
  // Call our `selectTodoById` with the state _and_ the ID value
  const todo = useSelector((state) => selectTodoById(state, id));
  const { text, completed, color } = todo;

  const dispatch = useDispatch();

  const handleCompletedChanged = () => {
    dispatch({ type: 'todos/todoToggled', payload: todo.id });
  };

  const handleColorChanged = (e) => {
    dispatch({
      type: 'todos/colorSelected',
      payload: { color: e.target.value, todoId: todo.id },
    });
  };

  const handleDelete = () => {
    dispatch({ type: 'todos/todoDeleted', payload: todo.id });
  };

  const colorOptions = availableColors.map((color) => (
    <option key={color} value={color}>
      {capitalize(color)}
    </option>
  ));

  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={handleCompletedChanged}
          />
          <div className="todo-text">{text}</div>
        </div>

        <div className="segment buttons">
          <select
            className="colorPicker"
            value={color}
            style={{ color }}
            onChange={handleColorChanged}
          >
            <option value=""></option>
            {colorOptions}
          </select>
          <button className="destroy" onClick={handleDelete}>
            <TimesSolid />
          </button>
        </div>
      </div>
    </li>
  );
}
