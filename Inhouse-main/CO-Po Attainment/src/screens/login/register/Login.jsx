import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Logout from "../Logout";

function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/login', formData, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });

            if (response.data.success) {
                toast.success("Login Successful!");
                navigate("/home"); // Ensure this is called after the toast
            } else {
                toast.error("Invalid email or password");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="container" >
            <div className="header">
            <div>
                <img src="/images/image.png" alt="logo" />
            </div>
            <div>
            <h1>Welcome to</h1>
            <h2>Dr. D. Y. Patil Pratishthan's D.Y. Patil College of Engineering</h2>
            <h3>Department Of Artificial Intelligence & Data Science</h3>
            </div>
            </div>
            
            <div className="form">
                <div className="left"><h1> Login </h1>
                <p>Login to your account</p>
                </div>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                       
                        id="exampleInputEmail1"
                        name="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group ">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                       
                        id="exampleInputPassword1"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" onClick={handleLogin} >Login</button>
            </form>
            </div>
          
        
        </div>
    );
}

export default Login;
