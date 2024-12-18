import React, { useEffect, useState } from 'react';
import { getClient, deleteClient } from '../services/clientService';
import Sidebar from "./Sidebar";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const ClientList = () => {

  const [client, setClient] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    if (!isDataFetched) {
      fetchClient();
    }
  }, [isDataFetched]);

  const fetchClient = async () => {
    try {
      const clientData = await getClient();
      setClient(clientData.data);
      setIsDataFetched(true);
      console.log(clientData.data, "clients");
    } catch (error) {
      console.error('Error fetching client:', error);
    }
  };

  const handleDelete = async ( clientId ) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this Client?");
  
    if (isConfirmed) {
      try {
        await deleteClient(clientId);
        alert("Client deleted successfully!");
        fetchClient();
      } catch (error) {
        console.error("Error deleting Client:", error);
        alert("Error deleting Client");
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
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {client.map((client, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{index+1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{client.clientName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <RiDeleteBin6Fill className="cursor-pointer hover:text-red-700"  onClick={() => handleDelete( client._id )} />
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

export default ClientList;
