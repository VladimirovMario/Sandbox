import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  _id: null,
  email: null,
  username: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials(state, action) {
      const { _id, email, username, token } = action.payload;
      state._id = _id;
      state.email = email;
      state.username = username;
      state.token = token;
      // localStorage.setItem('auth', btoa(JSON.stringify({ ...state })));
    },
    logOut(state, action) {
      state._id = null;
      state.email = null;
      state.username = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth?.username;
export const selectCurrentToken = (state) => state.auth?.token;
