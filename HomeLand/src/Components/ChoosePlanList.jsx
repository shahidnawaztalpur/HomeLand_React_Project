import React from "react";
import ChoosePlan from "../Components/ChoosePlan";
import Heading from "./Heading";

function ChoosePlanList() {

      const Plan = [
        {
          image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80",
          title :"Standard Plan",
          text :"Ideal for small families who value peaceful surroundings and essential modern facilities."
        },
        {
          image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
          title:"Premium Plan",
          text:"Enjoy spacious living, premium finishes, and beautiful architecture in a vibrant neighborhood."
        },
        {
          image:"https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80",
          title:"Luxury Plan",
          text:"Experience grandeur and ultimate comfort with smart home features and world-class facilities."
        }
      ];  
          
  return (
    <section className="py-16 bg-gray-100">
    <div className="container mx-auto px-6">
      <Heading
        title="Choose Plan"
        subtitle= "Discover the perfect home plan tailored to your lifestyle and budget. Whether you seek modern luxury, premium comfort, or affordable living, our exclusive plans are designed to meet your needs. Choose the ideal option that reflects your personality and enjoy a life of elegance, peace, and lasting value."
      />

    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {Plan.map((plans , index) => 
      <ChoosePlan key={index} {...plans} />
      )}
    </div>
    </div>
   </section> 
  )
}

export default ChoosePlanList;
