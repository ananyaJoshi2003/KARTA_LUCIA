import React, { useEffect, useState } from 'react';
import { getTestimonials, deleteTestimonials } from '../services/testimonialsService';
import Sidebar from "./Sidebar";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const TestimonialsList = () => {

  const [testimonials, setTestimonials] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    if (!isDataFetched) {
      fetchTestimonials();
    }
  }, [isDataFetched]);

  const fetchTestimonials = async () => {
    try {
      const testimonialsData = await getTestimonials();
      setTestimonials(testimonialsData.data);
      setIsDataFetched(true);
      console.log(testimonialsData.data, "testimonialss");
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  const handleDelete = async ( testimonialsId) => {

    const isConfirmed = window.confirm("Are you sure you want to delete this Testimonials?");
  
    if (isConfirmed) {
      try {
        await deleteTestimonials(testimonialsId);
        alert("Testimonials deleted successfully!");
        fetchTestimonials();
      } catch (error) {
        console.error("Error delete Testimonials:", error);
        alert("Error deleting Testimonials");
      }
    } else {
      console.log("Deletion canceled by the user");
    }
  };

  return (
    <div className="flex items-center h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col justify-center items-center flex-grow">
        <div
          className="w-full max-w-xl overflow-y-auto"
          style={{ maxHeight: "70vh", width:"75vh"}}
        >
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  S.No.
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                 Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Logo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {testimonials.map((testimonials, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{index+1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{testimonials.client}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{testimonials.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap"> 
                    <img src={testimonials.logoUrl} alt="testimonials Image" style={{ width: '50px', height: '50px' }} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <RiDeleteBin6Fill className="cursor-pointer hover:text-red-700"  onClick={() => handleDelete(testimonials._id)} />
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

export default TestimonialsList;
