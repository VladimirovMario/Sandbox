import { useParams, Link } from 'react-router-dom';
import { useGetPostQuery } from '../api/apiSlice';

import { PostAuthor } from './PostAuthor';
import { TimeAgo } from './TimeAgo';
import { ReactionButtons } from './ReactionButtons';
import { Spinner } from '../../components/Spinner';

export const PostPage = () => {
  const { postId } = useParams();

  const { data: post, isFetching, isSuccess } = useGetPostQuery(postId);

  let content = <></>;

  if (isFetching) {
    content = <Spinner text="Loading..." />;
  }
  if (isSuccess) {
    content = (
      <article className="post">
        <h2>{post.title}</h2>
        <div>
          <PostAuthor userId={post.user} />
          <TimeAgo timestamp={post.date} />
        </div>
        <p className="post-content">{post.content}</p>
        <ReactionButtons post={post} />
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    );
  }

  return <section>{content}</section>;
};
