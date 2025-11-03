import React from "react";

const PropertyCard = ({ image, title, location, price, area, bedrooms, bathrooms, status }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
      {/* Property Image */}
      <div className="relative">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <span
          className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full ${
            status === "For Sale" ? "bg-green-600 text-white" : "bg-blue-600 text-white"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Property Details */}
      <div className="p-5 space-y-2">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-500">{location}</p>
        <p className="text-blue-600 font-bold text-lg">{price}</p>

        {/* Extra Info */}
        <div className="flex justify-between text-sm text-gray-600 mt-3 border-t pt-3">
          <span> {area}</span>
          <span> {bedrooms} </span>
          <span> {bathrooms} </span>
        </div>

        <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
