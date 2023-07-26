export function tasksReducer(tasks, action) {
  const { type, id, text, task } = action;

  switch (type) {
    case 'added': {
      return [
        ...tasks,
        {
          id: id,
          text: text,
          done: false,
        },
      ];
    }
    case 'changed': {
      return tasks.map((t) => (t.id === action.task.id ? task : t));
    }
    case 'delete': {
      return tasks.filter((t) => t.id !== id);
    }
    default:
      throw Error('Unknown action: ' + type);
  }
}
