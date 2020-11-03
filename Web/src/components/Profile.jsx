import React, { useState, useEffect } from 'react';
import { UserService } from '../services/UserService';
import { AuthenticationService } from '../services/AuthService';
import './Profile.css';

const Profile = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => { 
        UserService.userProfile(AuthenticationService.currentUserValue.id)
        .then(response => {
         setUserInfo(response);
          setLoading(false);
        }).catch(error => {
          setLoading(false);
        });
    },    
    []);

    return (
        <div className ="profile-div">
        <h6>Profile</h6>
        <div className="info-div"><div className ="profile-label">Name:</div> <div className ="profile-detail">{userInfo ? userInfo.name : ''}</div></div>
        <div className="info-div"><div className ="profile-label">Email: </div><div className ="profile-detail">{userInfo ? userInfo.email : ''}</div></div>
        <div className="info-div"><div className ="profile-label">Role: </div> <div className ="profile-detail">{userInfo ? userInfo.role : ''}</div></div>
        </div>
      );
}

export default Profile;