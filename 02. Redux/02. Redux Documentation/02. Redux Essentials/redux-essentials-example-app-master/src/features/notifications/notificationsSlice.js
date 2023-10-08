import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  // current,
} from '@reduxjs/toolkit';
import { client } from '../../api/client';

const notificationsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date),
});

const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  // https://redux.js.org/tutorials/essentials/part-6-performance-normalization#thunk-arguments
  async (_, { getState }) => {
    const allNotifications = selectAllNotifications(getState());
    const [latestNotification] = allNotifications;
    const latestTimestamp = latestNotification ? latestNotification.date : '';
    const response = await client.get(
      `/fakeApi/notifications?since=${latestTimestamp}`
    );
    return response.data;
  }
);

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: notificationsAdapter.getInitialState(),
  reducers: {
    allNotificationsRead(state, action) {
      // console.log('before', current(state));
      Object.values(state.entities).forEach((notification) => {
        notification.read = true;
      });
      // console.log('after', current(state));
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      notificationsAdapter.upsertMany(state, action.payload);
      Object.values(state.entities).forEach((notification) => {
        // Any notifications we've read are no longer new
        notification.isNew = !notification.read;
      });
    });
  },
});

export const { allNotificationsRead } = notificationsSlice.actions;
export default notificationsSlice.reducer;

export const { selectAll: selectAllNotifications } =
  notificationsAdapter.getSelectors((state) => state.notifications);

export { fetchNotifications };
