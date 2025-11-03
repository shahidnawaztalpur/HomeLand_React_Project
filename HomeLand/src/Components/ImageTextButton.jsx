import React from "react";

function ImageTextButton({
  image = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  title = "Build Your Dream Home",
  text = "Homeland Construction helps you design and build your ideal home with expert planning, reliable materials, and professional service.",
  buttonText = "Learn More",
  onClick = () => alert("Button clicked!"),
}) {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto my-10">
      {/* Left side image */}
      <div className="md:w-1/2">
        <img
          src={image}
          alt={title}
          className="w-full h-64 md:h-full object-cover"
        />
      </div>

      {/* Right side text */}
      <div className="p-10 md:w-1/2 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold mb-3">{title}</h2>
        <p className="text-gray-600 mb-5 text-justify">{text}</p>
        <button
          onClick={onClick}
          className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default ImageTextButton;
