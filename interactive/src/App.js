// App.js
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './newcomponent/Register';
import Login from './newcomponent/Login';
import Header from './newcomponent/Header';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import About from './components/About';
import Contact from './components/Contact';
import Write from './newcomponent/Write';
import { UserProvider } from './UserContext';
import Blogging from './newcomponent/blogging';


function App() {
  return (
    <UserProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Header/>}/>
        <Route path="/blog-list" element={<BlogList/>} />
        <Route path="/post/:id" element={<BlogPost/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/write" element={<Write/>} />
        <Route path="/blogging" element={<Blogging/>} />
        <Route path="/start" element={<start/>} />
        

      </Routes>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;
