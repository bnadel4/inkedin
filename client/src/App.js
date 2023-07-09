import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/signup" component={Signup} />
      </Routes>
    </Router>
  );
}

export default App;

