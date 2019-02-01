import React from "react";
import "./index.css";

const Contact = () => (
  <div className="contact-site">
    <img className="contact-icon" src="/photos/contact.png" alt={"contact"} />
    <h1>You can contact with us...</h1>
    <form>
      <label for="fname">First Name</label>
      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Your name.."
      />

      <label for="lname">Last Name</label>
      <input
        type="text"
        id="lname"
        name="lastname"
        placeholder="Your last name.."
      />

      <label for="subject">Subject</label>
      <textarea
        id="subject"
        name="subject"
        placeholder="Write something.."
      />

      <input type="submit" value="Submit" />
    </form>
  </div>
);

export default Contact;
