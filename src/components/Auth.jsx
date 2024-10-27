// src/components/Auth.jsx
import React, { useState } from "react";
import axios from "axios";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = isLogin ? "http://localhost:5000/api/auth/login/user" : "http://localhost:5000/api/auth/register/user";
        
        try {
            const response = await axios.post(url, formData);
            console.log(response.data);
            // Handle token or response
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="auth-container">
            <h2>{isLogin ? "Login" : "Register"}</h2>
            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <div>
                        <label>Username:</label>
                        <input type="text" name="username" onChange={handleChange} required />
                    </div>
                )}
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" onChange={handleChange} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" onChange={handleChange} required />
                </div>
                <button type="submit">{isLogin ? "Login" : "Register"}</button>
            </form>
            <button onClick={() => setIsLogin(!isLogin)}>
                Switch to {isLogin ? "Register" : "Login"}
            </button>
        </div>
    );
};

export default Auth;
