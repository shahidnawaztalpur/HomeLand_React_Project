import React from "react";

const Blog = ({ image, miniTitle, title, text }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 max-w-md mx-auto my-12">

      {/* Image Section */}
      <img src={image} alt={title} className="w-full h-56 object-cover" />

      {/* Bottom Content Section */}
      <div className="p-5">
      <h6 className="font-semibold text-gray-800 mb-2">{miniTitle}</h6>
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-500 mb-4">{text}</p>
      </div>
    </div>
  );
};

export default Blog;
