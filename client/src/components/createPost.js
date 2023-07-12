import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_THOUGHT } from '../utils/mutations';
import { QUERY_THOUGHTS, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const CreatePost = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2>Create a New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
            />
            <label htmlFor="title">Title</label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content"
              required
            ></textarea>
            <label htmlFor="content">Content</label>
          </div>
          <button type="submit" className="btn btn-secondary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;