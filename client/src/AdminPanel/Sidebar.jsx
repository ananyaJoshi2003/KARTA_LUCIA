import React from "react";
import { TbMessageHeart } from "react-icons/tb";
import { TiContacts } from "react-icons/ti";
import { IoIosPeople } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { Link } from "react-router-dom";
import { VscSignOut } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';
import { CiBoxList } from "react-icons/ci";

export default function Sidebar() {

  const navigate = useNavigate();
  let token = null;
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };
 
  if(localStorage.getItem('adminToken')){
    token = localStorage.getItem('adminToken'); 
  }

  return (
    <div>
      <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
        <div className="space-y-3">
          <div className="flex items-center">
            <h2 className="text-xl text-black font-bold">Dashboard</h2>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm hover:bg-gray-100">
                <Link
                  className="flex items-center p-2 space-x-3 rounded-md"
                  to="/Work"
                >
                  <MdWork style={{ width: "24px", height: "24px" }} />{" "}
                  <span>Work</span>
                </Link>
              </li>

              <li className="border-t border-gray-200 rounded-sm hover:bg-gray-100">
                <Link
                  className="flex items-center p-2 space-x-3 rounded-md"
                  to="/WorkList"
                >
                  <CiBoxList style={{ width: "24px", height: "24px" }} />{" "}
                  <span>Work List</span>
                </Link>
              </li>

              <li className="border-t border-gray-600 rounded-sm hover:bg-gray-100">
                <Link
                  className="flex items-center p-2 space-x-3 rounded-md"
                  to="/Clients"
                >
                  <IoIosPeople style={{ width: "24px", height: "24px" }} />{" "}
                  <span>Clients</span>
                </Link>
              </li>

              <li className="border-t border-gray-200 rounded-sm hover:bg-gray-100">
                <Link
                  className="flex items-center p-2 space-x-3 rounded-md"
                  to="/ClientList"
                >
                  <CiBoxList style={{ width: "24px", height: "24px" }} />{" "}
                  <span>Clients List</span>
                </Link>
              </li>

              {/* <li className="border-t border-gray-600 rounded-sm hover:bg-gray-100">
                <Link
                  className="flex items-center p-2 space-x-3 rounded-md"
                  to="/Testimonials"
                >
                  <TbMessageHeart style={{ width: "24px", height: "24px" }} />{" "}
                  <span>Testimonials</span>
                </Link>
              </li>

              <li className="border-t border-gray-200 rounded-sm hover:bg-gray-100">
                <Link
                  className="flex items-center p-2 space-x-3 rounded-md"
                  to="/TestimonialsList"
                >
                  <CiBoxList style={{ width: "24px", height: "24px" }} />{" "}
                  
                  <span>Testimonials List</span>
                </Link>
              </li> */}

              <li className="border-t border-gray-600 rounded-sm hover:bg-gray-100">
                <Link
                  className="flex items-center p-2 space-x-3 rounded-md"
                  to="/ContactList"
                >
                  <TiContacts style={{ width: "24px", height: "24px" }} />{" "}
                  <span>Contact List</span>
                </Link>
              </li>

              <li className="border-t border-gray-600 rounded-sm hover:bg-gray-100">
                <Link
                  className="flex items-center p-2 space-x-3 rounded-md"
                  to="/blog"
                >
                  <TiContacts style={{ width: "24px", height: "24px" }} />{" "}
                  <span>Blogs</span>
                </Link>
              </li>
              
              <li className="border-t border-gray-200 rounded-sm hover:bg-gray-100">
                <Link
                  className="flex items-center p-2 space-x-3 rounded-md"
                  to="/blogList"
                >
                  <CiBoxList style={{ width: "24px", height: "24px" }} />{" "}
                  <span>Blogs List</span>
                </Link>
              </li>
              
              <li className="border-t border-gray-600 rounded-sm hover:bg-gray-100">
                <div className="flex items-center p-2 space-x-3 rounded-md">
                  <VscSignOut style={{ width: "24px", height: "24px" }} />{" "}
                  {token && <button onClick={handleLogout}>Logout</button>}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
