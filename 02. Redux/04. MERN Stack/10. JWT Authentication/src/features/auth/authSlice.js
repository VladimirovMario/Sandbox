import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { accessToken } = action.payload;
      state.token = accessToken;
    },
    logOut: (state, action) => {
      state.token = initialState.token;
    },
  },
});

const { reducer, actions } = authSlice;

export default reducer;
export const { setCredentials, logOut } = actions;

export const selectCurrentToken = (state) => state.auth.token;
