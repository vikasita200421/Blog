import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';
import './topbar.css';
import { Link } from 'react-router-dom';

export default function Topbar() {
  const { user, setUser } = useContext(UserContext);
  
  const navigate = useNavigate();

const logout = () => {
    setUser(null);
    navigate('/login');
};
if(!user) return alert("Please Login");
  return (
  

<div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          
          <li className="topListItem"><Link to='/blog-list'>HOME</Link></li>
          <li className="topListItem"><Link to='/About'>ABOUT</Link></li>
          <li className="topListItem"><Link to='/Contact'>CONTACT</Link></li>
          <li className="topListItem"><Link to='/Write'>WRITE</Link></li>
         

          <li className="topListItem"><button onClick={logout}>LOGOUT</button></li>
        </ul>
      </div>
      <div className="topRight">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""/>
        <i className="topSearchIcon fas fa-search"></i>
       
      </div>
    </div>
  );
  }
