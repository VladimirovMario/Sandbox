import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { PostsList } from './features/posts/PostsList';

import { Navbar } from './app/Navbar';
import { AddPostForm } from './features/posts/AddFormPost';
import { PostPage } from './features/posts/PostPage';
import { EditPostForm } from './features/posts/EditPostForm';
import { UserList } from './features/users/UserList';
import { UserPage } from './features/users/UserPage';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <AddPostForm />
                <PostsList />
              </>
            )}
          />
          <Route path="/posts/:postId" children={<PostPage />} />
          <Route path="/editPost/:postId" children={<EditPostForm />} />
          <Route exact path="/users" children={<UserList />} />
          <Route path="/users/:userId" children={<UserPage />} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
