import React from "react";
import Blog from "./Blog";
import Heading from "./Heading";

function BlogList() {

      const Blogs = [
        {
            image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
            miniTitle: "Jan 20th, 2025",
            title: "Top 5 Home Design Trends for 2025",
            text: "Explore modern architecture styles, color palettes, and sustainable materials that are shaping the future of home design this year."
          },
          {
            image: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=800&q=80",
            miniTitle: "Jun 12th, 2025",
            title: "How to Choose the Right Neighborhood",
            text: "Find out what makes a location ideal for your family, from nearby schools and parks to community culture and convenience."
          },
          {
            image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
            miniTitle: "May 06th, 2025",
            title: "Smart Home Ideas for Modern Living",
            text: "Learn how automation, energy efficiency, and tech-driven design can make your home more comfortable and future-ready."
          }          
      ];  
          
  return (
    <section className="py-16 bg-gray-100">
    <div className="container mx-auto px-6">
      <Heading
        title="Recent Blogs"
        subtitle= "Stay updated with the latest insights, real estate trends, and expert tips from our recent blogs. Discover guides on home buying, interior design, and smart living solutions. Our articles help you make informed decisions and stay connected with modern lifestyle ideas that bring comfort, value, and inspiration to your home."
      />

    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {Blogs.map((blog , index) => 
      <Blog key={index} {...blog} />
      )}
    </div>
    </div>
   </section> 
  )
}

export default BlogList;
