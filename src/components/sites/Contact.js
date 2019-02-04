import React from "react";
import "./index.css";

const Contact = () => (
  <div className="contact-site">
    <img className="contact-icon" src="/photos/contact.png" alt={"contact"} />
    <div className="contact-wrapper">
      <div className="contact-mobile">
        <span className="contact-label">Need help?</span>
        <a href="mailto:shop@lighting.com">shop@lighting.com</a>
        <span className="contact-label">Call us</span>
        <a href="tel:+11 2233 44556">+11 2233 44556</a>
        <div className="contact-social">
          <a href="twitter.com">
            <i className="fab fa-twitter" />
          </a>
          <a href="instagram.com">
            <i className="fab fa-instagram" />
          </a>
          <a href="linkedin.com">
            <i className="fab fa-linkedin" />
          </a>
        </div>
      </div>
      <div>
        <span className="contact-label">
          You can also write to us using the form below:
        </span>
        <form id="contact-form">
          <div>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>
          <div>
            <input
              id="contact-email"
              type="text"
              name="email"
              placeholder="E-mail"
            />
          </div>
          <div>
            <textarea
              id="contact-detail"
              rows="7"
              name="detail"
              placeholder="Your message"
            />
          </div>
        </form>
        <div className="contact-last">
          <button id="contact-submit" type="submit" name="submit">
            Send
          </button>
        </div>
        <p>We will answer as soon as possible</p>
      </div>
    </div>
  </div>
);

export default Contact;
