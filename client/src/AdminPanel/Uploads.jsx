import React from "react";
import Sidebar from "./Sidebar";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";

const Uploads = () => {
  // Sample data for demonstration
  const uploadsData = [
    {
      sno: 1,
      project: "File 1",
      date: "2024-02-21",
    },
    {
      sno: 2,
      project: "File 2",
      date: "2024-02-22",
    },
    {
      sno: 3,
      project: "File 3",
      date: "2024-02-23",
    },
    // Add more data as needed
  ];

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
                  Project
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Uploaded On
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Edit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {uploadsData.map((upload) => (
                <tr key={upload.sno}>
                  <td className="px-6 py-4 whitespace-nowrap">{upload.sno}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {upload.project}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{upload.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <AiFillEdit className="cursor-pointer hover:text-blue-700" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <RiDeleteBin6Fill className="cursor-pointer hover:text-red-700" />
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

export default Uploads;
