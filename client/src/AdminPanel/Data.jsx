import React from "react";
import Sidebar from "./Sidebar";

const Data = () => {
  // Sample data for demonstration
  const uploadsData = [
    {
      sno: 1,
      name: "Sanjay",
      email: "sample@email.com",
      phone: "9876543210"
    },
    {
      sno: 2,
      name: "Sanjay",
      email: "sample@email.com",
      phone: "9876543210"
    },
    {
      sno: 3,
      name: "Sanjay",
      email: "sample@email.com",
      phone: "9876543210"
    },
    // Add more data as needed
  ];

  return (
    <div className="flex items-center h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col justify-center items-center flex-grow">
        <div
          className="w-full max-w-xl overflow-y-auto"
          style={{ maxHeight: "70vh", width: "75vh" }}
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
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone number
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {uploadsData.map((upload) => (
                <tr key={upload.sno}>
                  <td className="px-6 py-4 whitespace-nowrap">{upload.sno}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{upload.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {upload.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {upload.phone}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Download button */}
          <div className="mt-4 text-right">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
              Download Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
