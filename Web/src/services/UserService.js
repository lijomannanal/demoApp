import { BehaviorSubject } from 'rxjs';
import { config } from '../config';
import { handleResponse } from '../utils/HandleResponse';

const getAllUsers = async () => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return fetch(`${config.apiUrl}/users`, requestOptions)
        .then(handleResponse)
        .then(users => {
            return users;
        });
}

const userProfile = async (userId) => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return fetch(`${config.apiUrl}/users/${userId}`, requestOptions)
        .then(handleResponse)
        .then(users => {
            return users;
        });
}



export const UserService = {
    getAllUsers,
    userProfile
};