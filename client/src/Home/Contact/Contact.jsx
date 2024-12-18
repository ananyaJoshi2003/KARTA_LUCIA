import React from "react";
import "./Contact.css";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const ContactSection = () => {
  return (
    <section id="ContactUs" className="contact-section container">
      <div className="contact-content">
        <h1 className="contact-heading">
          Let's Work Together
        </h1>
        <div className="contact-arrow">
          <HiOutlineArrowUpRight />
        </div>
      </div>

      <div className="contact-info">

        <div className="contact-item">
          <h3 className="contact-title">
            <div className="contact-link">
             Join our team{" "}
              <span className="arrow">
                <HiOutlineArrowUpRight />
              </span>
            </div>
          </h3>
          <p className="contact-details">explore exciting opportunities and grow with us!(coming soon)</p>
        </div>


        <div className="vertical-line">
        </div>

        <div className="contact-item">
          <h3 className="contact-title">
            <a
              href="mailto:partnerships@kartalucia.com"
              className="contact-link"
            >
              HIRE US{" "}
              <span className="arrow">
                <HiOutlineArrowUpRight />
              </span>
            </a>
          </h3>
          <p className="contact-details">
            <a href="mailto:partnerships@kartalucia.com">
              partnerships@kartalucia.com
            </a>
          </p>
        </div>

        <div className="vertical-line">
        </div>

        <div className="contact-item">
          <h3 className="contact-title">
            <div className="contact-link">
              PHONE{" "}
              <span className="arrow">
                <HiOutlineArrowUpRight />
              </span>
            </div>
          </h3>
          <p className="contact-details">(+91) - 9876543210</p>
        </div>
        
      </div>
    </section>
  );
};

export default ContactSection;
