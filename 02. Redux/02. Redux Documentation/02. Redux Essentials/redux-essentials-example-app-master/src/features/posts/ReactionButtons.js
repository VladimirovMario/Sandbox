import { useAddReactionMutation } from '../api/apiSlice';

export const ReactionButtons = ({ post }) => {
  const [addReaction] = useAddReactionMutation();

  const reactionEmoji = {
    thumbsUp: '👍',
    hooray: '🎉',
    heart: '❤️',
    rocket: '🚀',
    eyes: '👀',
  };

  const handleReaction = (name) => {
    addReaction({ postId: post.id, reaction: name });
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
