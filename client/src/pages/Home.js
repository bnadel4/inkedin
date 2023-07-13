import React from 'react';
import PostList from '../components/postList';

const Home = () => {
  return (
    <div className="text-center pt-3">
      <h1 className="font">Ink Feed</h1>
      <PostList />
    </div>
  );
};

export default Home;