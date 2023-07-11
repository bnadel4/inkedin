import React from 'react';
import Auth from '../../utils/auth'
import { Link } from 'react-router-dom';


const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-dark text-light mb-4 py-3 flex-row align-center">
      <div className="container d-flex justify-content-between">
        <div>
          <Link className="primary-link align-left" to="/">
            <h1 className="m-0">InkedIn</h1>
          </Link>
          <p className="m-0">Welcome to InkedIn!</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/profile">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : ( 
            <>
              <Link className="btn d-flex flex-reverse btn-small float-right btn-light m-2" to="/login">
                Login
              </Link>
              <Link className="btn d-flex flex-reverse btn-small float-right btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;