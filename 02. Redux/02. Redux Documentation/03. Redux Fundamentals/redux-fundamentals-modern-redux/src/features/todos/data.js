// Example of the data after using createEntityAdapter
const data = {
  todos: {
    ids: [],
    entities: {
      0: {
        color: '',
        completed: false,
        text: 'Clean yard',
        id: 0,
      },
      1: {
        color: '',
        completed: false,
        text: 'Buy toys',
        id: 1,
      },
      2: {
        color: '',
        completed: false,
        text: 'Clean bedroom',
        id: 2,
      },
      3: {
        color: '',
        completed: false,
        text: 'Clean house',
        id: 3,
      },
      4: {
        color: '',
        completed: false,
        text: 'Read book',
        id: 4,
      },
    },
    status: 'idle',
  },
  filters: {
    status: 'all',
    colors: [],
  },
};

// Example of the data before using createEntityAdapter
const exampleData = {
  todos: {
    status: 'idle',
    entities: {
      0: {
        color: '',
        completed: false,
        text: 'Read newspaper',
        id: 0,
      },
      1: {
        color: '',
        completed: false,
        text: 'Buy milk',
        id: 1,
      },
      2: {
        color: '',
        completed: false,
        text: 'Read newspaper',
        id: 2,
      },
      3: {
        color: '',
        completed: false,
        text: 'Buy milk',
        id: 3,
      },
      4: {
        color: '',
        completed: false,
        text: 'Read newspaper',
        id: 4,
      },
    },
  },
  filters: {
    status: 'all',
    colors: [],
  },
};
