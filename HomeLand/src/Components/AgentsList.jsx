import React from "react";
import Agents from "./Agents";
import Heading from "./Heading";

function AgentsList({ title, subtitle, data }) {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <Heading title={title} subtitle={subtitle} />

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {data && data.length > 0 ? (
            data.map((agent, index) => <Agents key={index} {...agent} />)
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No agents found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default AgentsList;
