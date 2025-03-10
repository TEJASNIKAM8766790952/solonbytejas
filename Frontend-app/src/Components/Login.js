import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);

    const handleClick = async () => {
        const payload = {
            email: email.toLowerCase(),
            password: password, // Assuming password is case-sensitive
        };

        try {
            const response = await fetch('http://localhost:8081/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (response.ok) {
                setIsSuccess(true);
                setResponseMessage('Login successful!');
                console.log('Login is Successful');
                navigate('/home'); // Redirect to home page
            } else {
                setIsSuccess(false);
                setResponseMessage(result.message || 'Invalid credentials');
            }
        } catch (error) {
            setIsSuccess(false);
            setResponseMessage('Failed to connect to the server.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2 className="appointment-title">Login</h2>
                
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleChangeEmail}
                    required
                /><br/>
                
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleChangePassword}
                    required
                /><br/>
                
                <button onClick={handleClick}>Login</button>

                {responseMessage && (
                    <p className={isSuccess ? 'success-message' : 'error-message'}>
                        {responseMessage}
                    </p>
                )}

                <p>
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
