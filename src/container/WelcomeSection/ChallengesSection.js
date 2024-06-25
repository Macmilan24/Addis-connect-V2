import React from "react";

const challenges = [
  {
    title: "Fix the Park",
    description: "Join us in cleaning and fixing the local park.",
  },
  {
    title: "Community Garden",
    description: "Help us establish a community garden in the neighborhood.",
  },
  {
    title: "Street Cleanup",
    description: "Volunteer for a street cleanup event this weekend.",
  },
];

const ChallengesSection = () => {
  return (
    <section className="p-10">
      <h2 className="text-2xl font-bold mb-6">Browse Challenges</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {challenges.map((challenge, index) => (
          <div key={index} className="p-4 bg-white shadow rounded">
            <h3 className="text-xl font-bold mb-2">{challenge.title}</h3>
            <p>{challenge.description}</p>
            <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChallengesSection;
