import { forwardRef } from 'react';

const AddComment = forwardRef(function AddComment(props, ref) {
  return <input type="text" placeholder="Add comment..." ref={ref} />;
});

export default AddComment;
