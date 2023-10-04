import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { PostAuthor } from './PostAuthor';

export const PostPage = () => {
  const { postId } = useParams();

  const post = useSelector((state) => state.posts.find((p) => p.id === postId));

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
        <PostAuthor userId={post.user} />
      </article>
    </section>
  );
};
