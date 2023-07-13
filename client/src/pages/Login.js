import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [login, { error }] = useMutation(LOGIN_USER);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await login({
        variables: { email: username, password },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setUsername('');
    setPassword('');
  };

  return (
    <div className="d-flex justify-content-center align-items-center loginform font">
      <div className="card">
        <h4 className="card-header bg-dark text-light p-2">Login</h4>
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button type="submit" className="btn btn-lg btn-secondary mt-4">Login</button>
          </form>

          {error && (
            <div>
              <p>Error logging in. Please try again.</p>
              <p>{error.message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;