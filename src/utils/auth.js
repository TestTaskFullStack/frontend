import {jwtDecode} from 'jwt-decode';

const TOKEN_KEY = 'auth_token';
    
export const setToken = (token) => {
    if (token) {
        localStorage.setItem(TOKEN_KEY, token);
    } else {
        localStorage.removeItem(TOKEN_KEY);
    }
};

export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
};
export const getDataUserFromJWT = () => {
    const token = getToken();
    if (token) {
        const decoded = jwtDecode(token);
        return decoded;
    }
    return null;
};




export const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY);
};

export const isAuthenticated = () => {
    const token = getToken();
    return !!token;
};