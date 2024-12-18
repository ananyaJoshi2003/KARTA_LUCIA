import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "./Blogs.css";

import { getBlogList } from "../../services/blogService";


// Truncate text function to limit characters and add "..."
const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }
  return text;
};

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    if (!isDataFetched) {
      fetchBlogs();
    }
  }, [isDataFetched]);

  const fetchBlogs = async () => {
    try {
      const blogsData = await getBlogList();
      setBlogs(blogsData.data);
      setIsDataFetched(true);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  return (
    <section id="Blogs" className="blog-section">
      <div className="blogs-head container">
        <h2>Our Blogs</h2>
      </div>
<div>
   {blogs.map((blog) => {
        // const formattedDate = new Date(blog.updatedAt).toLocaleDateString('en-US', {
        //   day: 'numeric',
        //   month: 'long',
        //   year: 'numeric'
        // });
        // console.log("Blog Data:", blog);

        return (
          <div key={blog._id} className="blog-card">
            <div className="blog-content">
            {/* <Link to={`/Details/${portfolio._id}`}> */}
            
              <Link to={blog.redirectUrl}>
                <h2 className="blog-title">
                  {truncateText(blog.content, 80)}
                </h2>
              </Link>
              <p className="blog-meta">
                {blog.author}
              </p>
            </div>
            <div className="blog-image">
              <img src={blog.imageUrl} alt={blog.author} />
            </div>
          </div>
        );
      })}
</div>
   
    </section>
  );
};

export default BlogSection;
