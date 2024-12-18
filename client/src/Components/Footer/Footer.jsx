import React from "react";
import {FaInstagram, FaFacebook } from "react-icons/fa";
import "./Footer.css";
import { FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
      @vanshdeepCreatives all rights reserved
      </p>
      <div className="footer-icons">
        <a href="https://www.instagram.com/1shdeep/?hl=en" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaInstagram />
        </a>
        <a href="https://m.facebook.com/p/1shdeep-100069412633422/" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaFacebook />
        </a>
        <a href="https://twitter.com/1shdeep_?lang=en" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaX />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
