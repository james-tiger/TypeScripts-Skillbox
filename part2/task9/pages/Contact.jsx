import React from 'react';

const Contact = () => {
  return (
    <div className="page contact-page">
      <h1>Contact Us</h1>
      <p>Get in touch with our team for any inquiries.</p>
      
      <div className="contact-form">
        <h2>Contact Form</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5"></textarea>
          </div>
          
          <button type="submit">Send Message</button>
        </form>
      </div>
      
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Email: contact@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Main St, Anytown, USA</p>
      </div>
    </div>
  );
};

export default Contact; 