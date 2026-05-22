import React from 'react';

import CommentForm from './commentForm';

import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../utils/queries';

import '../pages/css/style.css';
import '../pages/css/fonts.css';
const demoPosts = [
  {
    _id: 'demo-post-1',
    username: 'Inked Artist',
    postText: 'Portfolio demo: custom sleeve concept with geometric linework and blackwork shading.',
    imageURL: '',
    comments: [
      {
        commentId: 'demo-comment-1',
        username: 'Design Fan',
        commentText: 'Great line control and contrast.',
      },
    ],
  },
  {
    _id: 'demo-post-2',
    username: 'Tattoo Enthusiast',
    postText: 'Portfolio demo: watercolor floral piece inspired by spring colors and fine detail.',
    imageURL: '',
    comments: [
      {
        commentId: 'demo-comment-2',
        username: 'Studio Owner',
        commentText: 'Awesome composition for a shoulder placement.',
      },
    ],
  },
];


const PostList = () => {
  const { loading, error, data } = useQuery(GET_POSTS);
  const hasLivePosts = Array.isArray(data?.posts);
  const showDemoPosts = Boolean(error) || !hasLivePosts;
  const posts = hasLivePosts ? data.posts : demoPosts;
  
  if (loading && !data) return <p>Loading...</p>;

  return (
    <div>
      {showDemoPosts && (
        <p className="container col-md-5 alert alert-info mt-3 mb-3">
          Demo mode: portfolio sample posts are being shown because the live API is unavailable.
        </p>
      )}
      {!showDemoPosts && posts.length === 0 && (
        <p className="container col-md-5 mt-3">No posts yet.</p>
      )}
      { !loading && posts && posts.map((post) => (
        <div className="card container col-md-5 border border-5 border-dark rounded-5 postlist posttext" key={post._id}>
          <h3 className="font card-title">{post.username}</h3>
            <p className="font">{post.postText}</p>
              {post.imageURL && <img src={post.imageURL} alt="Post" />}
          {!showDemoPosts && <div><CommentForm postid={post._id} username="AJJ984"/></div>}
            <h4 className="font card-text">Comments:</h4>
              {post.comments.length ?
              post.comments.map((comment) => (
              <div className="font card-footer text-muted" key={comment.commentId || comment._id}>
                <p className="font">{comment.username}: {comment.commentText}</p>
              </div> 
              )) : null}

        </div>
      ))}
    </div>
  );
};

export default PostList;