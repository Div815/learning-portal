import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    const login = () => {
        // In a real app, you'd check a username/password here.
        // For this example, we'll just simulate a successful login.
        setIsAuthenticated(true);
        navigate('/home'); // Redirect to home page after login
    };

    const logout = () => {
        setIsAuthenticated(false);
        navigate('/login'); // Redirect to login page after logout
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the auth context easily
export const useAuth = () => {
    return useContext(AuthContext);
};