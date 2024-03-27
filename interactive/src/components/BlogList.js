// components/BlogList.js
import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './blog.webp'
function BlogList() {
  const blogs = [
    { id: 1, title: 'React Basics', content: 'Hello ...welcome to my react blog.' },
    { id: 2, title: 'State Management', content: 'This blog covers state management in React.' },
    // Add more blogs as needed
  ];

  return (
    <div >
      <h1><b>Blog List</b></h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <Link to={`/post/${blog.id}`}>{blog.title}</Link>
                       
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
