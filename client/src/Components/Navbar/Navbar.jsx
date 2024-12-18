import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../../Assets/Logos/KL Logo white.png";
import Client from "../../Assets/Navbar/user_1077114.svg";
import Blogs from "../../Assets/Navbar/freepik__minimal_blog.svg";
import Project from "../../Assets/Navbar/explore.svg";
import Contact from "../../Assets/Navbar/contact.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to navigate to a section by setting a URL hash
  const goToSection = (path, id) => {
    navigate(path + "#" + id);
  };

  // Scroll to the section if the URL contains a hash
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    }
  }, [location]);

  return (
    <div className={`navbar ${isScrolled ? 'navbar-blur' : ''}`}>
      <button
        className="menu-icon"
        onClick={() => goToSection("/", "Clients")}
      >
        <img src={Client} className="nav-icons" alt="Clients Icon" />
      </button>

      <button
        className="search-icon"
        onClick={() => goToSection("/", "Blogs")}
      >
        <img src={Blogs} className="nav-icons" alt="Blogs Icon" />
      </button>

      <button className="logo" onClick={() => goToSection("/", "home")}>
        <img src={Logo} alt="Logo" />
      </button>

      <button className="profile-icon" onClick={() => navigate("/Projects")}>
        <img src={Project} className="nav-icons" alt="Projects Icon" />
      </button>

      <button
        className="cart-icon"
        onClick={() =>
          (window.location.href = "mailto:partnerships@kartalucia.com")
        }
      >
        <img src={Contact} className="nav-icons" alt="Contact Icon" />
      </button>
    </div>
  );
};

export default Navbar;