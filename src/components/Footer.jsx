import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white p-6 rounded-lg shadow-xl mt-12">
      <div className="container mx-auto w-4/5 flex flex-col lg:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-center lg:text-left mb-6 lg:mb-0">
          <p className="text-3xl font-semibold mb-2">MediConnect</p>
          <p className="text-sm text-gray-200">
            Your trusted partner in healthcare.
          </p>
        </div>

        {/* Center Links */}
        <div className="flex flex-wrap justify-center gap-6 my-4 lg:my-0">
          <Link
            to="/about"
            className="text-lg font-medium hover:text-gray-200 transition duration-200"
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="text-lg font-medium hover:text-gray-200 transition duration-200"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-lg font-medium hover:text-gray-200 transition duration-200"
          >
            Contact
          </Link>
          <Link
            to="/faq"
            className="text-lg font-medium hover:text-gray-200 transition duration-200"
          >
            FAQ
          </Link>
        </div>

        {/* Right Section with Social Media Links */}
        <div className="text-center lg:text-right mt-6 lg:mt-0">
          <p className="mb-2 text-lg font-medium">Follow us on:</p>
          <div className="flex justify-center lg:justify-end space-x-6">
            {/* Facebook Icon */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition duration-200 text-2xl"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            {/* Twitter Icon */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition duration-200 text-2xl"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            {/* Instagram Icon */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition duration-200 text-2xl"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="text-center mt-8">
        <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} MediConnect. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
