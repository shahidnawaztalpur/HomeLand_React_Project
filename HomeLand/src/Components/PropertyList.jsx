import React from "react";
import PropertyCard from "./PropertyCard";

const PropertyList = ({ title, properties }) => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          {title}
        </h2>

        {/* Property Cards Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {properties && properties.length > 0 ? (
            properties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No properties available.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PropertyList;
