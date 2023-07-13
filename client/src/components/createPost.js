import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../utils/mutations';

import Auth from '../utils/auth';

const CreatePost = () => {
  const [postText, setPostText] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [addPost, { error }] = useMutation(ADD_POST);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const username = Auth.getLoggedInUsername(); 
      console.log(username)// Get the username
      const { data } = await addPost({
        variables: { postText, imageURL, username },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    setPostText('');
    setImageURL('');
  };

  return (
    <div className="card font">
      <div className="card-body">
        <h2>Create a New Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
              placeholder="Image URL"
              required
            />
            <label htmlFor="imageURL">Image URL</label>
          </div>
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              placeholder="Post Text"
              required
            ></textarea>
            <label htmlFor="postText">Post Text</label>
          </div>
          <button type="submit" className="btn btn-secondary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;

