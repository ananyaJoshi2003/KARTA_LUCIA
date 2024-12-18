import React from "react";
import Sidebar from "./Sidebar";
import logo from "../Assets/Logos/KL logotype White.png"

const AdminPanel = () => {
  return (
    <div className="flex items-center h-screen">
      <Sidebar />
      <div className="flex flex-col justify-center items-center flex-grow">
        {/* <iframe
          title="Hello"
          src="https://lottie.host/embed/b199d3a3-893b-459d-901e-9995ef70db8e/5WJbaVDPjD.json"
          width="500"
          height="500"
        ></iframe> */}
        <img src={logo} alt="" srcset="" />
      </div>
    </div>
  );
};

export default AdminPanel;
