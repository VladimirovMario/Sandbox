export default function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, { id: action.id, text: action.text, done: false }];
    }
    case 'changed': {
      return tasks.map((t) => (t.id === action.task.id ? action.task : t));
    }
    case 'delete': {
      return tasks.filter((t) => t.id !== action.id);
    }
    default:
      throw Error(`Unknown action: ${action.type}`);
  }
}
