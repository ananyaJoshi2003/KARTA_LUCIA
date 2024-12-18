import './App.css';
import Home from './Home/Home';
import Projects from './Pages/Projects/Projects'
import Details from './Pages/Details/Details';
import Form from './Components/Form/Form';
import LoginPage from './LoginPage/Login';
import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import AdminPanel from "./AdminPanel/AdminPanel.jsx";
import Uploads from "./AdminPanel/Uploads.jsx";
import Data from "./AdminPanel/Data.jsx";
import WorkAdmin from "./AdminPanel/Work-Admin.jsx";
import ClientAdmin from "./AdminPanel/Clients-Admin.jsx";
import TestimonialAdmin from "./AdminPanel/Testimonials-Admin.jsx";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import WorkList from "./AdminPanel/WorkList.jsx";
import ClientList from "./AdminPanel/ClientList.jsx";
import TestimonialsList from "./AdminPanel/TestimonialsList.jsx";
import ContactList from "./AdminPanel/ContactList.jsx";
import PrivateRouteAdmin from './utilities/Authorize/PrivateRouteAdmin';
import Blog from "./AdminPanel/Blog.jsx";
import BlogList from "./AdminPanel/BlogList.jsx";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop.jsx"
import Loader from './Components/Loader/Loader.jsx';


function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay or fetch initial resources
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop loading after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  if (isLoading) {
    return <Loader />; // Show loader while loading
  }

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Projects/:projectId" element={<Projects />} />
        <Route path="/admin/login" element={<LoginPage />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Details/:projectId" element={<Details />} />
        <Route path="/Form" element={<Form />} />

        <Route path="/" element={<PrivateRouteAdmin />}>
          <Route exact path="/Work" element={<WorkAdmin />} />
          <Route exact path="/Clients" element={<ClientAdmin />} />
          <Route exact path="/ContactList" element={<ContactList />} />
          <Route exact path="/AdminPanel" element={<AdminPanel />} />
          <Route exact path="/WorkList" element={<WorkList />} />
          <Route exact path="/ClientList" element={<ClientList />} />
          <Route exact path="/Testimonials" element={<TestimonialAdmin />} />
          <Route
            exact
            path="/TestimonialsList"
            element={<TestimonialsList />}
          />
          <Route exact path="/Uploads" element={<Uploads />} />
          <Route exact path="/Data" element={<Data />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/blogList" element={<BlogList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
