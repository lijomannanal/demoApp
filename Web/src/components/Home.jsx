import React, { useState, useEffect } from 'react';
import { AuthenticationService } from '../services/AuthService';
import { Role } from '../utils/Role';
import User from './User';
import Profile from './Profile';
import Header from './Header';



const logoutLblPos = {
    position: 'fixed',
    right:'10px',
    top: '5px',
 }

const Home = () => {
const [userRole, setUserRole] = useState('');
useEffect(() => { 
    setUserRole(AuthenticationService.currentUserValue.role) },
 []);

  return (
   <div>
       <Header/>
       {userRole === Role.ADMIN ? <User/> : <Profile/>}
   </div>
  );
}

export default Home;