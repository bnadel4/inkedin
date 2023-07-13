import React from 'react';

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p>{comment.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;