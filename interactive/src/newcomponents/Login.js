import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../UserContext'; // Import UserContext
export default function Login() {
  const [users, setUsers] = useState([]);
  const [loginDetails, setLoginDetails] = useState({ username: '', password: '' });
  const { setUser } = useContext(UserContext); // Use the context
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('https://65684b1b9927836bd9747995.mockapi.io/User')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error:', error));
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();
    const foundUsers = users.filter(user => user.username === loginDetails.username);

    if (foundUsers.length > 0) {
      setUser(foundUsers[0]); // Set the found user in context
      // alert('User exists');
      navigate('/home')
    } else {
      alert('User not found.');
    }
  };

  const handleInputChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleLogin}>
        <label>UserName:</label>
        <input
          name="username"
          type="text"
          placeholder="Username"
          value={loginDetails.username}
          onChange={handleInputChange}
        />
        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={loginDetails.password}
          onChange={handleInputChange}
        />
        <button className="loginButton">Login</button>
      </form>
    </div>
  );
}



