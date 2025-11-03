import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Agents = ({ image, title, subTitle, text }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 max-w-md mx-auto my-12">
      
      {/* Image Section */}
      <img src={image} alt={title} className="w-full h-60 object-cover" />

      {/* Bottom Content Section */}
      <div className="p-5 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-1">{title}</h3>
        <h6 className="font-medium text-gray-600 mb-3">{subTitle}</h6>
        <p className="text-gray-500 mb-4 text-justify">{text}</p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-left gap-5 text-2xl mb-5">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-800 transition duration-300 ml-8"
        >
          <FaFacebook />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-500 hover:text-pink-500 transition duration-300"
        >
          <FaInstagram />
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-500 hover:text-sky-700 transition duration-300"
        >
          <FaTwitter />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-800 transition duration-300"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Agents;
