import { forwardRef, useImperativeHandle, useRef } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';

const Post = forwardRef((props, ref) => {
  const commentsRef = useRef(null);
  const addCommentRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        scrollAndFocusAddComment() {
          commentsRef.current.scrollToBottom();
          addCommentRef.current.focus();
        },
      };
    },
    []
  );

  return (
    <>
      <article>
        <CommentList ref={commentsRef} />
        <AddComment ref={addCommentRef} />
      </article>
    </>
  );
});

export default Post;
