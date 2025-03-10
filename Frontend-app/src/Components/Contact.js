import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://newwebsite-1.onrender.com/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        await response.json();
        setResponseMessage('Thank you for contacting us! We will get back to you soon.');
        setIsError(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        const errorData = await response.json();
        setResponseMessage(errorData.error || 'Something went wrong. Please try again.');
        setIsError(true);
      }
    } catch (error) {
      setResponseMessage('An error occurred. Please check your connection and try again.');
      setIsError(true);
      console.error('Error:', error);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        {/* Left column with form */}
        <div className="left-column">
          <h1 className="contact-heading">Contact Us</h1>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                pattern="[0-9]{10}"
                title="Please enter a 10-digit phone number"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">Submit</button>
          </form>
          {responseMessage && (
            <p className={`response-message ${isError ? 'error' : 'success'}`}>
              {responseMessage}
            </p>
          )}
        </div>

        {/* Right column with details */}
        <div className="right-column">
          <div className="studio-details">
            <h2>Hair Envy Studio</h2>
            <p><strong>Owner:</strong> Tejas Nikam</p>
            <p><strong>Email:</strong> tejasnikam860@gmail.com</p>
            <p><strong>Contact No:</strong> +91 8766790952</p>
          </div>

          <div className="location-details">
            <p><strong>Location:</strong> AT post Lakhamapur, Nashik, India</p>
            <a href="https://maps.app.goo.gl/9d2Tz9GyeQ885qr1A" target="_blank" rel="noopener noreferrer">
              View on Google Maps
            </a>
          </div>

          <div className="social-links">
            <h2>Follow Us</h2>
            <p>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/tejas-nikam-447960219/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
