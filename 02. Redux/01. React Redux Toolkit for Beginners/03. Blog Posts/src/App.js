import AddPostForm from './features/posts/AddPostForm';
import PostsList from './features/posts/PostsList';

import SinglePost from './features/posts/SinglePost';
import Layout from './components/Layout';
import { Routes, Route, Navigate } from 'react-router-dom';
import EditPost from './features/posts/EditPost';
import UsersList from './features/users/UsersList';
import User from './features/users/User';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<PostsList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePost />} />
          <Route path="edit/:postId" element={<EditPost />} />
        </Route>

        <Route path="user">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<User />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
