import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../utils/mutations';
import Auth from '../utils/auth';


const CommentForm = (props) => {
  const [comment, setComment] = useState('');
  const [addComment, { data, loading, error }] = useMutation(ADD_COMMENT);

  if (loading) return 'Submitting...';
  if (error) return `You must be logged in to comment on a post!`;

  const handleSubmit =  async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: { postId: props.postid, commentText: comment, username: props.username },
      });

      setComment('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
      setComment(value);

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <span className="input-group-text">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
          <textarea
            className="form-control"
            value={comment}
            onChange={handleChange}
            placeholder="Add Your Comment Here!"
            required
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;