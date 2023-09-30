import { useDispatch } from 'react-redux';
import { reactionAdded } from './postsSlice';

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕',
};

export default function ReactionButtons({ post }) {
  const dispatch = useDispatch();

  function handleReaction(postId, name) {
    dispatch(reactionAdded({ postId, reaction: name }));
  }

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() => handleReaction(post.id, name)}
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
}
