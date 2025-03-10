import React from 'react';
import { useNavigate } from "react-router-dom";
import './Logout.css';

const Logout = () => {
    const navigate = useNavigate();

    const handleLoginRedirect = () => {
        navigate('/login'); 
    };

    return (
        <div className="logout-page">
            <h1>You have successfully logged out!</h1>
            <button onClick={handleLoginRedirect} className="btn btn-primary">
                Go to Login
            </button>
        </div>
    );
};

export default Logout;
