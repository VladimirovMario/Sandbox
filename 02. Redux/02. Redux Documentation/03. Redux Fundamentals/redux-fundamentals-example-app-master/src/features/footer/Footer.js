import { useSelector, useDispatch } from 'react-redux';
import { availableColors, capitalize } from '../filters/colors';
import { StatusFilters } from '../filters/filtersSlice';

const RemainingTodos = ({ count }) => {
  const suffix = count === 1 ? '' : 's';

  return (
    <div className="todo-count">
      <h5>Remaining Todos</h5>
      <strong>{count}</strong> <span>item{suffix} left</span>
    </div>
  );
};

const StatusFilter = ({ value: status, onChange }) => {
  const renderedFilters = Object.keys(StatusFilters).map((key) => {
    const value = StatusFilters[key];

    const handleClick = () => onChange(value);
    const className = value === status ? 'selected' : '';

    return (
      <li key={value}>
        <button className={className} onClick={handleClick}>
          {key}
        </button>
      </li>
    );
  });

  return (
    <div className="filters statusFilters">
      <h5>Filter Status</h5>
      <ul>{renderedFilters}</ul>
    </div>
  );
};

const ColorFilters = ({ value: colors, onChange }) => {
  const renderedColor = availableColors.map((color) => {
    const checked = colors.includes(color);

    const handleChange = () => {
      const changeType = checked ? 'removed' : 'added';
      onChange(color, changeType);
    };

    return (
      <label key={color}>
        <input
          type="checkbox"
          name={color}
          checked={checked}
          onChange={handleChange}
        />
        <span className="color-block" style={{ backgroundColor: color }}></span>
        {capitalize(color)}
      </label>
    );
  });

  return (
    <div className="filters colorFilters">
      <h5>Filter by Color</h5>
      <form className="colorSection">{renderedColor}</form>
    </div>
  );
};

export default function Footer() {
  const dispatch = useDispatch();

  const todosRemaining = useSelector(
    (state) => state.todos.filter((todo) => !todo.completed).length
  );

  const { status, colors } = useSelector((state) => state.filters);

  const onMarkCompleted = () => {
    dispatch({ type: 'todos/allCompleted' });
  };

  const onClearCompleted = () => {
    dispatch({ type: 'todos/completedCleared' });
  };

  const onStatusChange = (status) => {
    dispatch({ type: 'filters/statusFilterChanged', payload: status });
    // console.log('Status change: ', status);
  };

  const onColorChange = (color, changeType) => {
    dispatch({
      type: 'filters/colorFilterChanged',
      payload: { color, changeType },
    });
    // console.log('Color change: ', { color, changeType });
  };

  return (
    <footer className="footer">
      <div className="actions">
        <h5>Actions</h5>
        <button className="button" onClick={onMarkCompleted}>
          Mark All Completed
        </button>
        <button className="button" onClick={onClearCompleted}>
          Clear Completed
        </button>
      </div>

      <RemainingTodos count={todosRemaining} />
      <StatusFilter value={status} onChange={onStatusChange} />
      <ColorFilters value={colors} onChange={onColorChange} />
    </footer>
  );
}
