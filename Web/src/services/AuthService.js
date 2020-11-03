import { BehaviorSubject } from 'rxjs';
import { config } from '../config';
import { handleResponse } from '../utils/HandleResponse';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

const login = async ({ email, password }) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };

    return fetch(`${config.apiUrl}/auth/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);
            return user;
        });
}

const logout = () => {
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}


export const AuthenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () {
        return currentUserSubject.value 
    }
};