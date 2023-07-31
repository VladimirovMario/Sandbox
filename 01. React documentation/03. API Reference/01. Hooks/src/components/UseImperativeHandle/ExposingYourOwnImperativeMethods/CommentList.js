import { forwardRef, useImperativeHandle, useRef } from 'react';
import styles from './CommentList.module.css';

const CommentList = forwardRef(function CommentList(props, ref) {
  const difRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        scrollToBottom() {
          const node = difRef.current;
          node.scroll = node.scrollHeight;
        },
      };
    },
    []
  );

  let comments = [];

  for (let i = 0; i < 50; i++) {
    comments.push(<p key={i}>Comment #{i}</p>);
  }

  return (
    <div className={styles.CommentList} ref={difRef}>
      {comments}
    </div>
  );
});

export default CommentList;
