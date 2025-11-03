import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="text-center mx-auto w-[90%]">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
        {title}
      </h1>
      {subtitle && (
        <p className="text-gray-600 dark:text-gray-300 text-justify">{subtitle}</p>
      )}
    </div>
  );
};

export default Heading;
