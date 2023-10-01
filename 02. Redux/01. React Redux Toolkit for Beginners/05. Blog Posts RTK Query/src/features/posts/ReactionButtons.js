import { useAddReactionMutation } from './postsSlice';

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕',
};

export default function ReactionButtons({ post }) {
  const [addReaction] = useAddReactionMutation();

  async function handleReaction(postId, name) {
    const newValue = post.reactions[name] + 1;

    await addReaction({
      postId,
      reactions: { ...post.reactions, [name]: newValue },
    });
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
