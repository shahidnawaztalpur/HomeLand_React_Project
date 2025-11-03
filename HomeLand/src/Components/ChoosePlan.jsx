import React from "react";

const ChoosePlan = ({ heading, headingText, image, title, text }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 max-w-md mx-auto">
      {/* Top Heading Section */}
      <div className="p-5 text-center border-b border-gray-200">
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">{heading}</h1>
        <p className="text-gray-500 text-lg">{headingText}</p>
      </div>

      {/* Image Section */}
      <img src={image} alt={title} className="w-full h-56 object-cover" />

      {/* Bottom Content Section */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-500 mb-4">{text}</p>

        <button className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ChoosePlan;
