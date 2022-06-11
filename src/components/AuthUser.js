import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthUser() {
    const navigate = useNavigate();

    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        const tokenUser = JSON.parse(tokenString);
        return tokenUser;
    };

    const getUser = () => {
        const userString = sessionStorage.getItem('user');
        const userDetail = JSON.parse(userString);
        return userDetail;
    };

    const [token, setToken] = useState(getToken());
    const [user, setUser] = useState(getUser());

    const saveToken = (user, token) => {
        sessionStorage.setItem('token', JSON.stringify(token));
        sessionStorage.setItem('user', JSON.stringify(user));

        setUser(user);
        setToken(token);
        navigate('/dashboard');
    };

    const logout = () => {
        sessionStorage.clear();
        navigate('/login');
    };

    const http = axios.create({
        baseURL: 'http://127.0.0.1:8000/api',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    return {
        setToken:saveToken,
        token,
        user,
        getToken,
        getUser,
        http,
        logout
    };
}