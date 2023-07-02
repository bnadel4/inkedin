import React from 'react';
import { useQuery } from '@apollo/client';

import ThoughtList from '../components/ThoughtList';
import ThoughtForm from '../components/ThoughtForm';

import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  // Fetching thoughts using useQuery hook from Apollo Client
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  
  return (
    <div>
      {/* Top Navigation Bar */}
      <nav style={{ background: 'black', color: 'white', padding: '1rem' }}>
        {/* Navigation content */}
      </nav>
      
      {/* Center Section */}
      <section style={{ background: 'grey', minHeight: 'calc(100vh - 64px)', padding: '2rem' }}>
        {/* Thoughts List */}
        <ThoughtList thoughts={data?.thoughts || []} loading={loading} />
        
        {/* Thought Form */}
        <ThoughtForm />
      </section>
    </div>
  );
};

export default Home;

