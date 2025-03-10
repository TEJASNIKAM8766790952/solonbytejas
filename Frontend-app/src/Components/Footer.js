import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Salon Name and Owner Info */}
        <div className="footer-section">
          <h2>Hair Envy Studio</h2>
          <p>Owner: Tejas Nikam</p>
          <p>Email: <a href="mailto:tejasnikam860@gmail.com">tejasnikam860@gmail.com</a></p>
          <p>Contact No: <a href="tel:+918766790952">+91 8766790952</a></p>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul className="services-list">
            <li>Haircuts & Styling</li>
            <li>Coloring & Treatments</li>
            <li>Bridal Hair & Makeup</li>
            <li>Men’s Grooming</li>
            <li>Hair Extensions</li>
          </ul>
        </div>

        {/* Address Section */}
        <div className="footer-section">
          <h3>Our Location</h3>
          <p>AT post Lakhamapur, Nashik, India</p>
          <p>
            <a href="https://maps.app.goo.gl/9d2Tz9GyeQ885qr1A" target="_blank" rel="noopener noreferrer">
              View on Google Maps
            </a>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-media-list">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} className="social-icon" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/tejas-nikam-447960219/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
              </a>
            </li>
          </ul>
        </div>


        {/* About Section */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            At Hair Envy Studio, we take pride in providing top-notch services in a warm and welcoming environment.
            Our team of experienced stylists stays updated on the latest trends to help you look and feel your best.
          </p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p className="bottomtag">Designed by <a href="https://www.linkedin.com/in/tejasnikam" target="_blank" rel="noopener noreferrer">Tejas Nikam</a></p>
        <p className="bottomtag">&copy; {new Date().getFullYear()} Hair Envy Studio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer
