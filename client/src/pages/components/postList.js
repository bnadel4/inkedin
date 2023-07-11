import React from 'react';
import CommentForm from './commentForm';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../../utils/queries';
import '../css/style.css';
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
        <div class="card container col-md-5 border border-5 border-dark postlist posttext" key={post._id}>
          <h3 class="card-title">{post.username}</h3>
          <p>{post.postText}</p>
          {post.imageURL && <img src={post.imageURL} alt="Post" />}
          <p><CommentForm/></p>
          <h4 class="card-text">Comments:</h4>
          {post.comments.map((comment) => (
            <div class="card-footer text-muted" key={comment._id}>
              <p>{comment.username}: {comment.commentText}</p>

            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PostList;