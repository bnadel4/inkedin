import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../../utils/queries'; // Import the GET_POSTS query

const PostList = () => {
  // Use the useQuery hook to fetch the posts
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error occurred.</p>;

  const { posts } = data;
  
  return (
    <div>
      <h2>Post List</h2>
      {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.username}</h3>
          <p>{post.postText}</p>
          {post.imageURL && <img src={post.imageURL} alt="Post" />}
          <p>{post.createdAt}</p>
          <h4>Comments:</h4>
          {post.comments.map((comment) => (
            <div key={comment._id}>
              <p>{comment.username}: {comment.commentText}</p>
              <p>{comment.createdAt}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PostList;