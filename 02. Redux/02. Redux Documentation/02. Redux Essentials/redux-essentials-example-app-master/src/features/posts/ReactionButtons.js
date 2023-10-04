import { useDispatch } from 'react-redux';
import { reactionAdded } from './postsSlice';

export const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();

  const reactionEmoji = {
    thumbsUp: '👍',
    hooray: '🎉',
    heart: '❤️',
    rocket: '🚀',
    eyes: '👀',
  };

  const handleReaction = (name) => {
    dispatch(reactionAdded({ postId: post.id, reaction: name }));
  };

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="muted-button reaction-button"
        onClick={() => handleReaction(name)}
      >
        {emoji} {post.reactions ? post.reactions[name] : 0}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};
