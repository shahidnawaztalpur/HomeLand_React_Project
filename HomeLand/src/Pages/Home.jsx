import React, { useState } from 'react';
import '../App.css';
import AgentsList from '../Components/AgentsList';
import BlogList from '../Components/BlogList';
import ChoosePlanList from '../Components/ChoosePlanList';
import Hero from '../Components/Hero';
import PropertyList from '../Components/PropertyList';

const Home = () => {

    const propertyData = [
      {
        image:
          "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=80",
        title: "Luxury Villa in Karachi",
        location: "DHA Phase 6, Karachi",
        price: "PKR 4.5 Crore",
        status: "For Sale"
      },
      {
        image:
          "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=80",
        title: "Modern Apartment in Islamabad",
        location: "G-11 Sector, Islamabad",
        price: "PKR 2.3 Crore",
        status: "For Sale"
      },
      {
        image:
          "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80",
        title: "Stylish Home in Lahore",
        location: "Model Town, Lahore",
        price: "PKR 3.8 Crore",
        status: "For Sale"
      },
      {
        image:
          "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
        title: "Beachside Villa in Gwadar",
        location: "Marine Drive, Gwadar",
        price: "PKR 6.2 Crore",
        status: "For Sale"
      },
      {
        image:
          "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
        title: "Luxury Penthouse in Islamabad",
        location: "F-7 Sector, Islamabad",
        price: "PKR 5.8 Crore",
        status: "For Rent"
      },
      {
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        title: "Family Home in Hyderabad",
        location: "Latifabad, Hyderabad",
        price: "PKR 2.9 Crore",
        status: "For Rent"
      },
      {
        image:
          "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
        title: "Elegant House in Faisalabad",
        location: "Madina Town, Faisalabad",
        price: "PKR 3.4 Crore",
        status: "For Rent"
      },
      {
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
        title: "Modern Flat in Multan",
        location: "Bosan Road, Multan",
        price: "PKR 2.1 Crore",
        status: "For Sale"
      },
      {
        image:
          "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
        title: "Hill View Cottage in Murree",
        location: "Kashmir Point, Murree",
        price: "PKR 4.2 Crore",
        status: "For Rent"
      },
    ];


  const topAgents = [
    {
      image:
        "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=800&q=80",
      title: "David Miller",
      subTitle: "Senior Real Estate Agent",
      text: "David specializes in luxury properties and provides expert guidance to help clients find their dream homes.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
      title: "Sophia Johnson",
      subTitle: "Property Consultant",
      text: "With over 10 years of experience, Sophia is known for her client-first approach and deep knowledge of urban housing trends.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?auto=format&fit=crop&w=800&q=80",  
      title: "Emma Williams",
      subTitle: "Luxury Home Advisor",
      text: "Emma focuses on premium residential spaces, ensuring comfort and class for every client she works with.",
    },
  ];


  return (
    <>
      <Hero />
      <PropertyList 
      title="Featured Properties"
      properties={propertyData}
      />     
      <ChoosePlanList />
      <BlogList />

      <AgentsList
  title="Meet Our Top Performing Agents"
  subtitle="Our experienced real estate professionals are dedicated to helping you find the perfect property. With deep market knowledge, negotiation expertise, and a commitment to client satisfaction, they ensure your buying or selling journey is smooth, transparent, and successful."
  data={topAgents}
/>


    </>
  );
};

export default Home;

