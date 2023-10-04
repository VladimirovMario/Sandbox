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
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
