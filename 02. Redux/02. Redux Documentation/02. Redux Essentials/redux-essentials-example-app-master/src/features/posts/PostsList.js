import { useMemo } from 'react';
import { useGetPostsQuery } from '../api/apiSlice';

import { Spinner } from '../../components/Spinner';
import { PostExcerpt } from './PostExcerpt';

export const PostsList = () => {
  const {
    data: posts = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery();

  const sortedPosts = useMemo(
    () => posts.slice().sort((a, b) => b.date.localeCompare(a.date)),
    [posts]
  );

  let content = <></>;

  if (isLoading) {
    content = <Spinner text="Loading..." />;
  }
  if (isSuccess) {
    content = sortedPosts.map((post) => (
      <PostExcerpt key={post.id} post={post} />
    ));
  }
  if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {content}
    </section>
  );
};

/*
console.log(useGetPostsQuery());

Object { status: "pending", isUninitialized: false, isLoading: true, isSuccess: false, isError: false, data: undefined, currentData: undefined, isFetching: true, refetch: refetch()...}​
currentData: undefined​
data: undefined​
isError: false​
isFetching: true​
isLoading: true​
isSuccess: false​
isUninitialized: false​
refetch: function refetch()​
status: "pending"​
<prototype>: Object { … }
PostsList.js:13

Object { status: "pending", endpointName: "getPosts", requestId: "q62Jtu77cpI_T612SLuhD", startedTimeStamp: 1696941177210, isUninitialized: false, isLoading: true, isSuccess: false, isError: false, data: undefined, currentData: undefined, … }​
currentData: undefined​
data: undefined​
endpointName: "getPosts"​
isError: false​
isFetching: true​
isLoading: true​
isSuccess: false​
isUninitialized: false​
refetch: function refetch()​
requestId: "q62Jtu77cpI_T612SLuhD"​
startedTimeStamp: 1696941177210​
status: "pending"​
<prototype>: Object { … }
PostsList.js:13

Object { status: "pending", endpointName: "getPosts", requestId: "q62Jtu77cpI_T612SLuhD", startedTimeStamp: 1696941177210, isUninitialized: false, isLoading: true, isSuccess: false, isError: false, data: undefined, currentData: undefined, … }​
currentData: undefined​
data: undefined​
endpointName: "getPosts"​
isError: false​
isFetching: true​
isLoading: true​
isSuccess: false​
isUninitialized: false​
refetch: function refetch()​
requestId: "q62Jtu77cpI_T612SLuhD"​
startedTimeStamp: 1696941177210​
status: "pending"​
<prototype>: Object { … }
PostsList.js:13

Object { status: "fulfilled", endpointName: "getPosts", requestId: "q62Jtu77cpI_T612SLuhD", startedTimeStamp: 1696941177210, data: (9) […], fulfilledTimeStamp: 1696941179299, isUninitialized: false, isLoading: false, isSuccess: true, isError: false, … }
​currentData: Array(9) [ {…}, {…}, {…}, … ]​
data: Array(9) [ {…}, {…}, {…}, … ]​
endpointName: "getPosts"​
fulfilledTimeStamp: 1696941179299​
isError: false​
isFetching: false​
isLoading: false​
isSuccess: true​
isUninitialized: false​
refetch: function refetch()​
requestId: "q62Jtu77cpI_T612SLuhD"​
startedTimeStamp: 1696941177210​
status: "fulfilled"
*/
