import React, { useState } from 'react';
import '../App.css';
import Hero from '../Components/Hero';
import PropertyList from '../Components/PropertyList';

const Properties = () => {

  const propertyData = [
    {
      image:
        "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=80",
      title: "Luxury Villa in Karachi",
      location: "DHA Phase 6, Karachi",
      price: "PKR 4.5 Crore",
      area: "4500 sq. ft.",
      bedrooms: 5,
      bathrooms: 4,
      status: "For Sale",
    },
    {
      image:
        "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=80",
      title: "Modern Apartment in Islamabad",
      location: "G-11 Sector, Islamabad",
      price: "PKR 2.3 Crore",
      area: "1800 sq. ft.",
      bedrooms: 3,
      bathrooms: 2,
      status: "For Sale",
    },
    {
      image:
        "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80",
      title: "Stylish Home in Lahore",
      location: "Model Town, Lahore",
      price: "PKR 3.8 Crore",
      area: "3200 sq. ft.",
      bedrooms: 4,
      bathrooms: 3,
      status: "For Sale",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
      title: "Beachside Villa in Gwadar",
      location: "Marine Drive, Gwadar",
      price: "PKR 6.2 Crore",
      area: "5200 sq. ft.",
      bedrooms: 6,
      bathrooms: 5,
      status: "For Sale",
    },
    {
      image:
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
      title: "Luxury Penthouse in Islamabad",
      location: "F-7 Sector, Islamabad",
      price: "PKR 5.8 Crore",
      area: "3900 sq. ft.",
      bedrooms: 4,
      bathrooms: 4,
      status: "For Sale",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      title: "Family Home in Hyderabad",
      location: "Latifabad, Hyderabad",
      price: "PKR 2.9 Crore",
      area: "2800 sq. ft.",
      bedrooms: 4,
      bathrooms: 3,
      status: "For Sale",
    },
    {
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
      title: "Elegant House in Faisalabad",
      location: "Madina Town, Faisalabad",
      price: "PKR 3.4 Crore",
      area: "3000 sq. ft.",
      bedrooms: 4,
      bathrooms: 3,
      status: "For Sale",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      title: "Modern Flat in Multan",
      location: "Bosan Road, Multan",
      price: "PKR 2.1 Crore",
      area: "1600 sq. ft.",
      bedrooms: 3,
      bathrooms: 2,
      status: "For Rent",
    },
    {
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
      title: "Hill View Cottage in Murree",
      location: "Kashmir Point, Murree",
      price: "PKR 4.2 Crore",
      area: "3500 sq. ft.",
      bedrooms: 5,
      bathrooms: 4,
      status: "For Sale",
    },
  ];
  

  return (
    <>
      <Hero />
      <PropertyList 
      title="Modern Properties"
      properties = {propertyData}
      />     

    </>
  );
};

export default Properties;

