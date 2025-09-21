import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
    const { login } = useAuth();
    const [isLoginView, setIsLoginView] = useState(true);

    const handleLogin = (e) => {
        e.preventDefault();
        // In a real app, you would validate the user's credentials
        console.log('Logging in...');
        login();
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        // In a real app, you would register the new user and then log them in
        console.log('Signing up and logging in...');
        login(); // Simulate auto-login after sign-up
    };

   return (
    <div className="login-container">
        <h1>Welcome to our learning platform!</h1>

        <div className="login-box">
            <div className="view-toggle">
                <button
                    onClick={() => setIsLoginView(true)}
                    className={isLoginView ? 'active' : ''}
                >
                    Login
                </button>
                <button
                    onClick={() => setIsLoginView(false)}
                    className={!isLoginView ? 'active' : ''}
                >
                    Sign Up
                </button>
            </div>

            {isLoginView ? (
                <>
                    <p>Login to continue</p>
                    <form onSubmit={handleLogin}>
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit">Login</button>
                    </form>
                </>
            ) : (
                <>
                    <p>Get started with your learning journey</p>
                    <form onSubmit={handleSignUp}>
                        <input type="text" placeholder="Full Name" required />
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit">Sign Up</button>
                    </form>
                </>
            )}
        </div>
    </div>
);
};

export default LoginPage;