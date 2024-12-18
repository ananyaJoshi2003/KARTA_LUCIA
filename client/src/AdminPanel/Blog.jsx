import React, { useState } from "react";
import Sidebar from './Sidebar';
// import { BlogService } from '../services/blogService';
import { createBlog } from '../services/blogService';

const Blog = () => {

  const [contentName, setContentName] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [redirectUrl, setRedirectUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {

      if (!contentName.trim() || !author.trim() || !imageUrl.trim()) {
        setError("All fields are required");
        alert("All fields are required");
        return;
      }

      const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
      if (!urlPattern.test(imageUrl.trim())) {
        setError("Invalid logo URL. Please enter a valid URL.");
        alert("Invalid logo URL. Please enter a valid URL.");
        return;
      }

    try {

      const blogData = {
        content: contentName,
        author: author,
        imageUrl: imageUrl,
        redirectUrl: redirectUrl
      };

      await createBlog(blogData);
      
      setContentName("");
      setAuthor("");
      setImageUrl("");
      setRedirectUrl("");
      setError("");
      
      alert("Blog uploaded successfully!");
    } catch (error) {
      console.error("Error uploading Blog:", error);
      alert("Error uploading Blog");
    }
  };

  return (
    <div className="flex items-center h-screen">
      <Sidebar />
      <div className="flex flex-col justify-center items-center flex-grow">
        <div className="bg-white rounded-md shadow-md p-6">
          <h2 className="text-xl color-black font-bold mb-4">Blog</h2>
          <div className="flex flex-col w-full">
            <textarea
              placeholder="content"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="textarea"
              value={contentName}
              onChange={(e) => setContentName(e.target.value)}
            />
            <textarea
              placeholder="author"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="textarea"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <textarea
              placeholder="Image Url"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
            <textarea
              placeholder="Link Url"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
              value={redirectUrl}
              onChange={(e) => setRedirectUrl(e.target.value)}
            />
            <button
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              onClick={handleSubmit}
            >
              Upload!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog