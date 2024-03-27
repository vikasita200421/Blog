import React, { useState, useContext } from 'react';
import "./register.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext'; // Import UserContext

export default function Register() {
  const [signupDetails, setSignupDetails] = useState({ username: '', password: '' });
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext); // Use the context

  const checkUserExists = async (username) => {
    try {
      const response = await axios.get('https://65684b1b9927836bd9747995.mockapi.io/User');
      return response.data.some(user => user.username === username);
    } catch (error) {
      console.error('Error fetching users:', error);
      return false;
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const userExists = await checkUserExists(signupDetails.username);
    if (userExists) {
      console.log('User already exists. Redirecting to login...');
      navigate('/login');
      return;
    }

    axios.post('https://65684b1b9927836bd9747995.mockapi.io/User', signupDetails)
      .then(response => {
        console.log('Signup successful:', response.data);
        setUser(response.data); // Set the new user in context
        navigate('/login'); // Navigate to home on successful signup
      })
      .catch(error => {
        console.error('Signup error:', error);
      });
  };

  const handleInputChange = (e) => {
    setSignupDetails({ ...signupDetails, [e.target.name]: e.target.value });
  };

    return (
      <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSignup}>
          <label>Username</label>
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={signupDetails.username}
            onChange={handleInputChange}
          />
          <label>Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={signupDetails.password}
            onChange={handleInputChange}
          />
          <button className="registerButton">Register</button>
        </form>
      </div>
    );
  }