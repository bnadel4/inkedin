import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Header from './pages/components/header';
import Footer from './pages/components/footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});



function App() {
  return (
  <ApolloProvider client={client}>
    <Router>
      <div>
    <Header/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    <Footer/>
      </div>
    </Router>
  </ApolloProvider> 
  );
}

export default App;

