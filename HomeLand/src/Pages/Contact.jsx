import React from "react";
import AgentsList from "../Components/AgentsList";

function Contact() {

  const topAgents = [
    {
      image:
        "https://images.unsplash.com/photo-1614289371518-722f2615943d?auto=format&fit=crop&w=800&q=80",
      title: "Alexander Novak",
      subTitle: "Client Relations Manager",
      text: "Alexander ensures every client enjoys clear communication and personalized property solutions. He’s the first to help when you reach out to us.",
    },
    {
      image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      title: "Elena Fischer",
      subTitle: "Customer Support Executive",
      text: "Elena provides timely assistance for inquiries, property tours, and follow-ups. Her friendly approach makes every client feel valued and informed.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=800&q=80",
      title: "Lukas Schmidt",
      subTitle: "Property Advisor",
      text: "Lukas helps clients discover the right property and guides them through every step of the communication and purchase process with professionalism.",
    },
  ];
  

  return (
    <>
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-indigo-600 mb-8">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
        {/* Left Side - Form UI */}
        <form className="space-y-5 text-left">
        <div>
        <label className="block text-gray-700 font-medium mb-1">
        Full Name
        </label>
        <input
        type="text"
        placeholder="Enter your name"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        </div>

        <div>
        <label className="block text-gray-700 font-medium mb-1">
        Email Address
        </label>
        <input
        type="email"
        placeholder="Enter your email"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        </div>

        <div>
        <label className="block text-gray-700 font-medium mb-1">
        Message
        </label>
        <textarea
        rows="5"
        placeholder="Write your message..."
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></textarea>
        </div>

        <div className="">
        <button
        type="button"
        className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
        Send Message
        </button>
        </div>
        </form>


          {/* Right Side - Info */}
          <div className="flex flex-col space-y-4 text-left">
            <h3 className="text-xl font-semibold text-gray-800">
              Contact Information
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Feel free to reach out to us for any inquiries, collaborations, or
              project discussions. We’ll get back to you as soon as possible!
            </p>
            <div className="space-y-2 text-gray-700">
              <p>📍 123 Homeland Street, Karachi, Pakistan</p>
              <p>📞 +92 300 1234567</p>
              <p>✉️ contact@homeland.com</p>
            </div>
          </div>

         
        </div>
      </div>
    </section>

    <AgentsList
  title="Connect with Our Support Team"
  subtitle="Our dedicated professionals are here to assist you with property inquiries, client services, and personalized guidance every step of the way."
  data={topAgents}
/>

    </>
  );
}

export default Contact;
