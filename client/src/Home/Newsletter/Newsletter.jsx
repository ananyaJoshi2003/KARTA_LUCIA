import React, { useState } from "react";
import "./Newsletter.css";
import { createContact } from "../../services/portfolioService";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    if (!email.trim()) {
      alert("All fields are required");
      return;
    }

    try {
      const contactData = { email };

      await createContact(contactData);

      setEmail(""); // Clear the email field
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error uploading details:", error);
      alert("Error uploading details");
    }
  };

  return (
    <div>
      <div className="Newsletter">
        <div className="flex">
          <h1>Subscribe To Our Newsletter</h1>
        </div>
        <div className="right-flex">
          <div className="right-flex-inner">
            <h2>Subscribe</h2>
            <p>
            Stay updated with the latest news and exclusive offers in your inbox.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="newsletter-btn ">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
