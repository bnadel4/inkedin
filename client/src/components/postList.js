import React from 'react';

import CommentForm from './commentForm';

import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../utils/queries';

import '../pages/css/style.css';
import '../pages/css/fonts.css';


const PostList = () => {
  // Use the useQuery hook to fetch the posts
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error occurred.</p>;

  const { posts } = data;
  
  console.log(posts);

  return (
    <div>
      { !loading && posts && posts.map((post) => (
        <div className="card container col-md-5 border border-5 border-dark rounded-5 postlist posttext" key={post._id}>
          <h3 className="font card-title">{post.username}</h3>
            <p className="font">{post.postText}</p>
              {post.imageURL && <img src={post.imageURL} alt="Post" />}
          <div><CommentForm postid={post._id} username="PJ"/></div>
            <h4 className="font card-text">Comments:</h4>

              {post.comments.length ? 
              post.comments.map((comment) => (
              <div className="font card-footer text-muted" key={comment._id}>
                <p className="font">{comment.username}: {comment.commentText}</p>
              </div> 
              )) : null}

        </div>
      ))}
    </div>
  );
};

export default PostList;