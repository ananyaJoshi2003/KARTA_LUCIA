import Sidebar from "./Sidebar";
import React, { useState } from "react";
import { createClient } from '../services/clientService';


const ClientsAdmin = () => {

  const [clientName, setclientName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    if (!clientName.trim()) {
      setError("Client name cannot be empty");
      alert("Client name cannot be empty");
      return;
    }

    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;

    if (!urlPattern.test(clientName.trim())) {
      setError("Please enter a valid URL");
      alert("Please enter a valid URL");
      return;
    }

    try {
      await createClient({ clientName: clientName }); 
      alert("Client name uploaded successfully!");
      setclientName("");
      setError("");
    } catch (error) {
      console.error("Error uploading client name:", error);
      alert("Error uploading client name");
    }
  };

  const handleChange = (event) => {
    setclientName(event.target.value);
    setError(""); 
  };

  return (
    <div className="flex items-center h-screen">
      <Sidebar />
      <div className="flex flex-col justify-center items-center flex-grow">
        <div className="bg-white rounded-md shadow-md p-6">
          <h2 className="text-xl color-black font-bold mb-4">Clientele Section</h2>
          <form className="flex flex-col w-full" onSubmit={handleSubmit}>
            <div className="form-control">
              <textarea
                className="input input-alt border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Your Client's Name Here!"
                required=""
                type="text"
                value={clientName}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ClientsAdmin;
