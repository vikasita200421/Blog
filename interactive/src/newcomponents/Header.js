import BlogList from "../components/BlogList";
import Topbar from "./Topbar";
import "./header.css";


import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div className="header">
   
    <Topbar/>
    
      <div className="headerTitles">
      
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      
       <h1><Link to='/blogging'>Blogging</Link></h1>
      <p>The word blog is actually a shortened form of its original name, "weblog." These weblogs allowed early internet users to "log" the details of their day in diary-style entries. Blogs often allow readers to comment, so as they became more common, communities sprung up around popular blogs.</p>
      <header>
      <h1>My blogging journey</h1>
      <p>Sharing my thoughts, experiences, and tips on blogging.</p>
  </header>
  <section>
        <article>
            <h2><Link to='/start'>Getting Started</Link></h2>
            <p>
                So, you've decided to start your own blog! Congratulations! In this article, we'll explore the initial steps you need to take to set up your blog, choose a platform, and start creating content.
            </p>
            <p>
                Whether you're a seasoned writer or a beginner, blogging is a fantastic way to share your ideas with the world. Let's dive into the exciting world of blogging together!
            </p>
        </article>

        <article>
            <h2><Link to='/'>Choosing the Right Blogging Platform</Link> </h2>
            <p>
                There are many blogging platforms available, each with its own strengths and features. From WordPress to Medium and beyond, we'll discuss the pros and cons of different platforms to help you make an informed decision.
            </p>
            <p>
                Consider factors such as ease of use, customization options, and community support when selecting the platform that best suits your needs.
            </p>
        </article>

        <article>
            <h2><Link to='/' >Tips for Creating Engaging Content </Link></h2>
            <p>
                Crafting compelling and engaging content is crucial for attracting and retaining readers. Learn about effective writing techniques, the importance of visual elements, and strategies for promoting your blog on social media.
            </p>
            <p>
                Remember, consistency is key! Regularly update your blog with fresh, relevant content to keep your audience coming back for more.
            </p>
        </article>
    </section>
    </div>
  );
}