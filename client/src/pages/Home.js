import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../utils/queries';
import PostList from './components/postList';

const Home = () => {
 
  return (
    <div>
      Hello, This is the Body in the HOME section, Home should have Post Lists, and endless scroll<br></br>
      Any Side Bar elements That may be needed.
    </div>
  );
};

export default Home;
