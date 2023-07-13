import React from 'react';
import Auth from '../utils/auth'
import { Link } from 'react-router-dom';
import '../pages/css/fonts.css';
import '../pages/css/style.css';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-dark text-light d-flex justify-content-center">
      <div className="flex-fill mb-4 mx-0 py-3 sticky-top">
        <div className="row flex-fill align-items-center">
          <div className="col">
            <p className ='title-font mainheader'>InkedIn</p>
          </div>
          <div className="col">
            {Auth.loggedIn() ? (
              <>
              <div className= 'd-flex justify-content-end'>
                <Link className="btn btn-lg btn-light m-2" to="/profile">
                  {Auth.getProfile().data.username}'s profile
                </Link>
                <Link className="btn btn-lg btn-light m-2" to="/">
                  Home
                </Link>
                <button className="btn btn-lg btn-light m-2" onClick={logout}>
                  Logout
                </button>
              </div>
              </>
            ) : ( 
              <>
              <div className= 'd-flex justify-content-end title-font'>
              <Link className="btn btn-lg btn-light m-2" to="/">
                  Home
                </Link>
                <Link className="btn btn-lg btn-light m-2 " to="/login">
                  Login
                </Link>
                <Link className="btn btn-lg btn-light m-2" to="/signup">
                  Signup
                </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;