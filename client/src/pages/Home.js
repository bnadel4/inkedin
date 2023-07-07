import React from 'react';
import { useQuery } from '@apollo/client';

import Header from './components/header';
import Footer from './components/footer';
import PostList from './components/postList';
import CreatePost from './components/createPost';
import CommentList from './components/commentList';
import CommentForm from './components/commentForm';

import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  // Fetching thoughts using useQuery hook from Apollo Client
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Top Navigation Bar */}
      <nav style={{ background: 'black', color: 'white', padding: '1rem' }}>
        {/* Navigation content */}
      </nav>
      
      {/* Center Section */}
      <section style={{ background: 'grey', minHeight: 'calc(100vh - 64px)', padding: '2rem' }}>
        {/* Post List */}
        <PostList posts={data?.posts || []} />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

