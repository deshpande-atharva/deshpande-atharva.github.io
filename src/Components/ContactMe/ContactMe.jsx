import { Box } from "@mui/material";
import React from "react";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div className="contactme">
      <div className="name">
        <span>Contact Me</span>
      </div>
      <div className="form-div">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Your Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button className="button-hireme" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
