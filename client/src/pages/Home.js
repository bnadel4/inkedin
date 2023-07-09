import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../utils/queries';
import PostList from './components/postList';
import CommentForm from './components/commentForm';
import CommentList from './components/commentList';
import CreatePost from './components/createPost';



const Home = () => {
 
  return (
    <div>
      Hello, This is the Body in the HOME section, Home should have Post Lists, and endless scroll<br></br>
      Any Side Bar elements That may be needed.

      <PostList/> PostList does not currently work as an individual component, Error as follows --Cannot read properties of undefined (reading 'map')
      TypeError: Cannot read properties of undefined (reading 'map')

      {/* <CommentForm/> Going to Comment out, for testing purposes CommentForm works, need to figure out if this needs to be here or in the postList.js */}

      {/* <CommentList/> CommentList does not work as an individual component yet */}

      {/* <CreatePost/> CreatePost does import the Title and Content Boxes as well as a Submit button, working as individual component */}

    </div>
  );
};

export default Home;
