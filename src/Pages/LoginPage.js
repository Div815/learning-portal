import React from 'react';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
    const { login } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();
        // Here you would normally handle form validation, etc.
        login();
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Welcome Back!</h1>
                <p>Sign in to continue</p>
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;