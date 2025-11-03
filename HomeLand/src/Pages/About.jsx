import React, { useState } from 'react';
import '../App.css';
import AgentsList from '../Components/AgentsList';
import ImageTextButton from '../Components/ImageTextButton';
import Hero from '../Components/Hero';

const About = () => {
  const topAgents = [
    {
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      title: "Olivia Martin",
      subTitle: "Managing Director",
      text: "Olivia oversees company operations and business development. Her modern approach and commitment to excellence ensure smooth project delivery and long-term client satisfaction.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=800&q=80",
      title: "Daniel Harris",
      subTitle: "Head of Project Development",
      text: "Daniel leads the project management division, focusing on sustainable development and premium architectural standards that define Homeland’s reputation for quality.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=80",
      title: "Sophie Turner",
      subTitle: "Director of Client Relations",
      text: "Sophie ensures seamless communication between clients and teams. Her professionalism and empathy help maintain lasting partnerships and high client satisfaction.",
    },
  ];
  
      const newAgents = [
        {
          image:
            "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=80",
          title: "Michael Roberts",
          subTitle: "Investment Specialist",
          text: "Michael helps investors identify profitable real estate opportunities.",
        },
        {
          image:
            "https://images.unsplash.com/photo-1557862921-37829c790f19?auto=format&fit=crop&w=800&q=80",
          title: "Olivia Brown",
          subTitle: "Residential Agent",
          text: "Olivia connects families to their dream homes with dedication and attention to detail.",
        },
        {
          image:
            "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80",
          title: "James Carter",
          subTitle: "Commercial Property Expert",
          text: "James specializes in corporate real estate solutions and business property management.",
        },
      ];
      
  return (
    <>
      <Hero />

      
      <ImageTextButton
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
        title="Modern Architecture"
        text="James specializes in corporate real estate and business property management. He offers expert advice on leasing, buying, and managing commercial spaces. With a focus on client satisfaction, James ensures professional, efficient, and value-driven solutions for long-term real estate success."
        buttonText="Explore More"
        onClick={() => alert('Explore More button clicked!')}
      />

<AgentsList
  title="Our Leadership Team"
  subtitle="Meet the visionary leaders guiding Homeland Construction toward innovation, integrity, and excellence. Their experience, strategic insight, and dedication drive the company’s growth and ensure lasting client trust."
  data={topAgents}
/>

<AgentsList
  title="Our Expanding Team of Trusted Agents"
  subtitle="Meet the newest professionals joining Homeland Construction’s growing network. Their dedication, knowledge, and client-focused approach strengthen our mission to deliver exceptional real estate services across every project."
  data={newAgents}
/>



    
    </>
  );
};

export default About;
