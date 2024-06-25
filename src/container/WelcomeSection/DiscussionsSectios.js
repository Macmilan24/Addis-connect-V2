import React from "react";

const discussions = [
  {
    title: "Improving Local Transit",
    description:
      "Discuss ideas and solutions for improving our local transit system.",
  },
  {
    title: "Neighborhood Watch",
    description: "Join the conversation on enhancing neighborhood safety.",
  },
];

const DiscussionsSection = () => {
  return (
    <section className="p-10 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Community Discussions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {discussions.map((discussion, index) => (
          <div key={index} className="p-4 bg-white shadow rounded">
            <h3 className="text-xl font-bold mb-2">{discussion.title}</h3>
            <p>{discussion.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DiscussionsSection;
