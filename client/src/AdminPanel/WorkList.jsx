import React, { useEffect, useState } from 'react';
import { createPortfolio, getPortfolioByIdOrAll, deletePortfolio } from '../services/portfolioService';
import Sidebar from "./Sidebar";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const WorkList = () => {

  const [portfolios, setPortfolios] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    if (!isDataFetched) {
      fetchPortfolios();
    }
  }, [isDataFetched]);

  const fetchPortfolios = async () => {
    try {
      const portfoliosData = await getPortfolioByIdOrAll();
      setPortfolios(portfoliosData.data);
      setIsDataFetched(true);
      console.log(portfoliosData.data, "portfolioss");
    } catch (error) {
      console.error('Error fetching portfolios:', error);
    }
  };

  const handleDelete = async (portfolioId) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this portfolio?");
  
    if (isConfirmed) {
      try {
        await deletePortfolio(portfolioId);
        alert("Portfolio deleted successfully!");
        fetchPortfolios();
      } catch (error) {
        console.error("Error deleting portfolio:", error);
        alert("Error deleting portfolio");
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
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Image
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
              {portfolios.map((portfolio, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{index+1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{portfolio.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap"> 
                    <img src={portfolio.imageUrl} alt="Portfolio Image" style={{ width: '50px', height: '50px' }} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link to={`/Work?id=${portfolio._id}`}>
                      <AiFillEdit className="cursor-pointer hover:text-blue-700" />
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <RiDeleteBin6Fill className="cursor-pointer hover:text-red-700"  onClick={() => handleDelete(portfolio._id)} />
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

export default WorkList;
