import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Header from './components/header';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.css';

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
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

