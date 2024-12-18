import React, { useState } from "react";
import Sidebar from './Sidebar';
import { createTestimonials } from '../services/testimonialsService';

const TestimonialsAdmin = () => {

  const [clientName, setClientName] = useState("");
  const [description, setDescription] = useState("");
  const [logoUrl, setLogoUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
     // Check if any of the fields are empty
      if (!clientName.trim() || !description.trim() || !logoUrl.trim()) {
        setError("All fields are required");
        alert("All fields are required");
        return;
      }

      // Validate logo URL
      const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
      if (!urlPattern.test(logoUrl.trim())) {
        setError("Invalid logo URL. Please enter a valid URL.");
        alert("Invalid logo URL. Please enter a valid URL.");
        return;
      }

    try {
      // Create the testimonials data object
      const testimonialsData = {
        client: clientName,
        description: description,
        logoUrl: logoUrl
      };

      // Call the createTestimonials function with the testimonialsData object
      await createTestimonials(testimonialsData);
      
      // Optionally, you can reset the form after successful submission
      setClientName("");
      setDescription("");
      setLogoUrl("");
      setError("");
      
      alert("Testimonial uploaded successfully!");
    } catch (error) {
      console.error("Error uploading testimonial:", error);
      alert("Error uploading testimonial");
    }
  };

  return (
    <div className="flex items-center h-screen">
      <Sidebar />
      <div className="flex flex-col justify-center items-center flex-grow">
        <div className="bg-white rounded-md shadow-md p-6">
          <h2 className="text-xl color-black font-bold mb-4">Valuable Testimonials</h2>
          <div className="flex flex-col w-full">
            <input
              placeholder="Client's Name"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="textarea"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
            />
            <textarea
              placeholder="Description"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <textarea
              placeholder="Logo URL"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              type="text"
              value={logoUrl}
              onChange={(e) => setLogoUrl(e.target.value)}
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

export default TestimonialsAdmin