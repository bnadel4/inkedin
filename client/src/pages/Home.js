import React from 'react';
import PostList from './components/postList';
const Home = () => {
  


  return (
    <div>
      Hello, This is the Body in the HOME section, Home should have Post Lists, and endlesss scroll
      Any Side Bar elements That may be needed.

      <PostList/>

      {/* <CommentForm/> Going to Comment out, for testing purposes CommentForm works, need to figure out if this needs to be here or in the postList.js */}

      {/* <CommentList/> CommentList does not work as an individual component yet */}

      {/* <CreatePost/> CreatePost does import the Title and Content Boxes as well as a Submit button, working as individual component */}

    </div>
  );
};

export default Home;
