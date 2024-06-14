import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.get('http://localhost:8000/logout', {
                withCredentials: true
            });
            toast.success("Logout Successful!");
            navigate('/'); // Navigate to the login page after logout
        } catch (error) {
            console.error('Error logging out:', error);
            toast.error("An error occurred during logout. Please try again.");
        }
    };

    return (
        <button onClick={handleLogout} className="btn btn-danger">Logout</button>
    );
};

export default Logout;
