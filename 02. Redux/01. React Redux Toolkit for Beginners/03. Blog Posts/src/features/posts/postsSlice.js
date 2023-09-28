// https://redux-toolkit.js.org/api/createSlice
// https://redux.js.org/usage/writing-logic-thunks#thunk-overview
// https://axios-http.com/
// https://date-fns.org/
// https://stackoverflow.com/questions/73444733/redux-toolkit-state-showing-as-proxy-handler-null-target-null-i
// https://redux-toolkit.js.org/api/createEntityAdapter
import {
  createSlice,
  nanoid,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
  // current,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { sub } from 'date-fns/esm';

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const postsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date),
});

const initialState = postsAdapter.getInitialState({
  status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
  count: 0,
});

const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const response = await axios.get(POSTS_URL);
    return [...response.data];
  } catch (error) {
    return error.message;
  }
});

const addNewPost = createAsyncThunk('posts/addNewPost', async (initialPost) => {
  try {
    const response = await axios.post(POSTS_URL, initialPost);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const updatePost = createAsyncThunk('posts/updatePost', async (initialPost) => {
  const { id } = initialPost;
  try {
    const response = await axios.put(`${POSTS_URL}/${id}`, initialPost);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const deletePost = createAsyncThunk('posts/deletePost', async (initialPost) => {
  const { id } = initialPost;
  try {
    const response = await axios.delete(`${POSTS_URL}/${id}`);
    if (response?.status === 200) {
      return initialPost;
    }
    return `${response?.status}: ${response?.statusText}`;
  } catch (error) {
    return error.message;
  }
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // Customizing Generated Action Creators
    // https://redux-toolkit.js.org/api/createSlice#customizing-generated-action-creators
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      // const existingPost = state.posts.find((post) => post.id === postId);
      const existingPost = state.entities[postId];
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
    increaseCount(state, _) {
      state.count = state.count + 1;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Adding date and reactions
        let min = 1;
        const loadedPosts = action.payload.map((post) => {
          post.date = sub(new Date(), { minutes: min++ }).toISOString();
          post.reactions = {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          };
          return post;
        });

        // Add any fetched posts to the array
        // console.log('before', current(state));
        // state.posts = [...loadedPosts];
        postsAdapter.upsertMany(state, loadedPosts);
        // console.log('after', current(state));
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        action.payload.userId = Number(action.payload.userId);
        action.payload.date = new Date().toISOString();
        action.payload.reactions = {
          thumbsUp: 0,
          wow: 0,
          heart: 0,
          rocket: 0,
          coffee: 0,
        };
        console.log(action.payload);
        // state.posts.push(action.payload);
        postsAdapter.addOne(state, action.payload);
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log('Update could not complete');
          console.log(action.payload);
          return;
        }

        // const { id } = action.payload;
        action.payload.date = new Date().toISOString();
        // const posts = state.posts.filter((post) => post.id !== id);
        // state.posts = [...posts, action.payload];
        postsAdapter.upsertOne(state, action.payload);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        if (!action.payload?.id) {
          console.log('Delete could not complete');
          console.log(action.payload);
          return;
        }

        const { id } = action.payload;
        // state.posts = state.posts.filter((post) => post.id !== id);
        postsAdapter.removeOne(state, id);
      });
  },
});

// export const selectAllPosts = (state) => state.posts.posts;
// export const getPostById = (state, postId) =>
//   state.posts.posts.find((post) => post.id === postId);

export const {
  selectAll: selectAllPosts,
  selectById: getPostById,
  selectIds: selectPostIds,
  //getSelectors creates these selectors and we rename them with aliases using destructuring
  // Pass in a selector that returns the posts slice of state
} = postsAdapter.getSelectors((state) => state.posts);

export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;
export const getCount = (state) => state.posts.count;

// Memoized selector function
// https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization
export const selectPostsByUser = createSelector(
  [selectAllPosts, (state, userId) => userId],
  (posts, userId) => posts.filter((post) => post.userId === userId)
);

export { fetchPosts, addNewPost, updatePost, deletePost };

export const { postAdded, reactionAdded, increaseCount } = postsSlice.actions;

export default postsSlice.reducer;
