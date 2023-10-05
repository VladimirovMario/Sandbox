import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { client } from '../../api/client';

const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await client.get('/fakeApi/users');
  return response.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default usersSlice.reducer;

export { fetchUsers };
