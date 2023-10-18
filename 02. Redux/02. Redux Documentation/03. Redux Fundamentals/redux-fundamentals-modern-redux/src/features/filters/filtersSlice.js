import { createSlice } from '@reduxjs/toolkit';

export const StatusFilters = {
  All: 'all',
  Active: 'active',
  Completed: 'completed',
};

const initialState = {
  status: StatusFilters.All,
  colors: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    statusFilterChanged(state, action) {
      state.status = action.payload;
    },
    colorFilterChanged: {
      reducer(state, action) {
        const { color, changeType } = action.payload;
        const { colors } = state;

        if (changeType === 'added' && colors.includes(color) === false) {
          colors.push(color);
        }
        if (changeType === 'removed') {
          state.colors = colors.filter(
            (existingColor) => existingColor !== color
          );
        }
      },
      prepare(color, changeType) {
        return { payload: { color, changeType } };
      },
    },
  },
});

export const { statusFilterChanged, colorFilterChanged } = filtersSlice.actions;

export default filtersSlice.reducer;
