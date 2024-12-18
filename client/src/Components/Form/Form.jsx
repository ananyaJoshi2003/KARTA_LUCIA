import React, { useState } from "react";
import "./Form.css";
import { createContact } from "../../services/portfolioService";
import ContactSection from "../../Home/Contact/Contact";

const ContactForm = () => {

  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

const handleSubmit = async (event) => {
  event.preventDefault();
  if (!name.trim() || !email.trim() || !phone.trim() || !message.trim()) {
    setError("All fields are required");
    alert("All fields are required");
    return;
  }

  try {
    const contactData = {
      name,
      email,
      phone,
      message
    };

    await createContact(contactData);

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");

    alert("Message send successfully!");
  } catch (error) {
    console.error("Error uploading details:", error);
    alert("Error uploading detail");
  }
};


  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        <h2>Subscribe to the Newsletter</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group-form">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group-form">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group-form">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        
      </div>
      <ContactSection/>
    </section>
  );
};

export default ContactForm;
