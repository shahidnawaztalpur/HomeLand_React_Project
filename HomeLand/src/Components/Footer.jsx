import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10 w-full">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo & About Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Homeland</h2>
          <p className="text-sm leading-relaxed">
            Homeland is your trusted real estate partner helping you find 
            the perfect home with honesty and reliability.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Properties</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-sm">📍 Karachi, Pakistan</p>
          <p className="text-sm">📞 +92 300 1234567</p>
          <p className="text-sm">✉️ info@homeland.com</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-500 text-sm border-t border-gray-700 mt-8 pt-4">
        © {new Date().getFullYear()} Homeland. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
