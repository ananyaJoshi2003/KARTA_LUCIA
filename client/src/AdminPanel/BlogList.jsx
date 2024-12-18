import React, { useEffect, useState } from 'react';
import { getBlogList, deleteBlog } from '../services/blogService';
import Sidebar from "./Sidebar";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const BlogList = () => {

  const [blogs, setBlogs] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    if (!isDataFetched) {
      fetchBlogs();
    }
  }, [isDataFetched]);

  const fetchBlogs = async () => {
    try {
      const blogData = await getBlogList();
      setBlogs(blogData.data);
      setIsDataFetched(true);
      console.log(blogData.data, "blogData");
    } catch (error) {
      console.error('Error fetching portfolios:', error);
    }
  };

  const handleDelete = async (blogId) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this Blogs?");
  
    if (isConfirmed) {
      try {
        await deleteBlog(blogId);
        alert("Blogs deleted successfully!");
        fetchBlogs();
      } catch (error) {
        console.error("Error deleting Blogs:", error);
        alert("Error deleting Blogs");
      }
    } else {
      console.log("Deletion canceled by the user");
    }
  };

  return (
    <div className="flex items-center h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col justify-center items-center flex-grow ">
        <div
          className="w-full max-w-xl overflow-y-auto"
          style={{ maxHeight: "70vh", minWidth:"60vw"}}
        >
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  S.No.
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                content
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Author
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Image
                </th>
                {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Edit
                </th> */}
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {blogs.map((blog, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{index+1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{blog.content}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{blog.author}</td>
                  <td className="px-6 py-4 whitespace-nowrap"> 
                    <img src={blog.imageUrl} alt="blog Image" style={{ width: '50px', height: '50px' }} />
                  </td>
                  {/* <td className="px-6 py-4 whitespace-nowrap">
                    <Link to={`/Work?id=${blog._id}`}>
                      <AiFillEdit className="cursor-pointer hover:text-blue-700" />
                    </Link>
                  </td> */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <RiDeleteBin6Fill className="cursor-pointer hover:text-red-700"  onClick={() => handleDelete(blog._id)} />
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
