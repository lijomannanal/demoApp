import React from 'react';
import { AuthenticationService } from '../services/AuthService';
import { history } from '../utils/History';
import './Header.css';

const Header = () => {
    const logOut = () => {
     AuthenticationService.logout();
     history.push('/login');
    }

  return (
    <div className="header">
    <a href="#" className="logout-link" onClick={logOut}>
      Logout
   </a>
   </div>
  );
}

export default Header;