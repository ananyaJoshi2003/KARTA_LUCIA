import React, { useEffect, useState } from 'react';
import { getContact } from '../services/portfolioService';
import Sidebar from "./Sidebar";
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const convertToExcel = (data) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Contacts');
  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const fileName = 'ContactDetails.xlsx';
  const blob = new Blob([excelBuffer], {type: 'application/octet-stream'});
  FileSaver.saveAs(blob, fileName);
};


const ContactList = ( ) => {

  const [contact, setContact] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    if (!isDataFetched) {
      fetchContact();
    }
  }, [isDataFetched]);

  const fetchContact = async () => {
    try {
      const contactData = await getContact();
      setContact(contactData.data);
      setIsDataFetched(true);
      console.log(contactData.data, "contact");
    } catch (error) {
      console.error("Error fetching Contact:", error);
    }
  };

   const handleDownload = () => {
    const emailList = contact.map((contact) => {
      return { 
        name:contact.name,
        number:contact.phone,
        email: contact.email 
      };
    });
    convertToExcel(emailList);
  };

  return (
    <div className="flex items-center h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col justify-center items-center flex-grow">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mb-2 px-4 rounded" onClick={handleDownload}>Download Emails</button>
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
                 Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Message
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {contact.map((contact, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{index+1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{contact.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{contact.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{contact.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{contact.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
