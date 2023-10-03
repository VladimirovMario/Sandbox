import {
  createSlice,
  // , current
} from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      // console.log('before', current(state));
      state.push(action.payload);
      // console.log('after', current(state));
    },
  },
});

export const { postAdded } = postsSlice.actions;
export default postsSlice.reducer;
