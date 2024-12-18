import React from "react";

import { Link } from "react-router-dom";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import './CTA.css'
const CTA = () => {
  return (
    <div className="cta-section container">
    <div className="contact-info">
        <div className="contact-item">
          <h3 className="contact-title">
            <Link to='/Projects'
              className="contact-link"
            >
              Our Projects{" "}
              <span className="arrow">
                <HiOutlineArrowUpRight />
              </span>
            </Link>
          </h3>
          <p className="contact-details">
          Explore our creative work and projects.
          </p>
        </div>
        <div className="vertical-line">

        </div>
        <div className="contact-item">
          <h3 className="contact-title">
            <div className="contact-link">
              Contact Us{" "}
              <span className="arrow">
                <HiOutlineArrowUpRight />
              </span>
            </div>
          </h3>
          <p className="contact-details">
          Get in touch with us for quotes and inquiries.
          </p>
        </div>
        <div className="vertical-line">
          
        </div>

        <div className="contact-item">
          <h3 className="contact-title">
            <div className="contact-link">
              Blogs{" "}
              <span className="arrow">
                <HiOutlineArrowUpRight />
              </span>
            </div>
          </h3>
          <p className="contact-details">Check out our latest articles and insights.</p>
        </div>
        
      </div>
    </div>
  );
};

export default CTA;
