import React, { useState, useEffect } from 'react';
import { UserService } from '../services/UserService';
import './User.css';

const User = () => {
const [allUsers, setAllUsers] = useState([]);
const [loading, setLoading] = useState(false);
useEffect(() => { 
    UserService.getAllUsers()
    .then(response => {
     setAllUsers(response);
      setLoading(false);
    }).catch(error => {
      setLoading(false);
    });
},
    []);

    const tbodyMarkup = allUsers.map(user => (
        <tr key = {user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role}</td>
    </tr>)
    );

 return (
    <div className ="table-div">
    <h6>User Details</h6>
    <table className="user-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
            </tr>
        </thead>
        <tbody>{tbodyMarkup}</tbody>
    </table>
    </div>
  );
}

export default User;