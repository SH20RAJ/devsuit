import HackathonCard from "@/components/explore/HackathonCard";
import React from "react";

export default function page() {
  const hackathons = [
    {
      title: "Meta Hackathon 2024",
      description:
        "An event to build innovative solutions using Facebook's technologies.",
      image: "https://via.placeholder.com/300",
      date: "2024-01-01",
      location: "San Francisco, CA",
      prize: "10,000 USD",
      participants: 100,
      teams: 10,
      status: "active",
      bgColor: "#4267B2", // Meta's color
    },
    {
      title: "Google Hackathon 2024",
      description:
        "An event to build innovative solutions using Google's technologies.",
      image: "https://via.placeholder.com/300",
      date: "2024-01-01",
      location: "San Francisco, CA",
      prize: "10,000 USD",
      participants: 100,
      teams: 10,
      status: "active",
      bgColor: "#4285F4", // Google's color
    },
    {
      title: "X Hackathon 2024",
      description:
        "An event to build innovative solutions using Facebook's technologies.",
      image: "https://via.placeholder.com/300",
      date: "2024-01-01",
      location: "San Francisco, CA",
      prize: "10,000 USD",
      participants: 100,
      teams: 10,
      status: "active",
      bgColor: "#1DA1F2", // X (Twitter)'s color
    },
    {
      title: "Hamster Hackathon 2024",
      description:
        "An event to build innovative solutions using Facebook's technologies.",
      image: "https://via.placeholder.com/300",
      date: "2024-01-01",
      location: "San Francisco, CA",
      prize: "10,000 USD",
      participants: 100,
      teams: 10,
      status: "active",
      bgColor: "#FF4500", // Example color for Hamster
    }
  ];
  return (
    <div>
      <section className="flex flex-col gap-4 my-10">
        <h1 className="text-2xl font-bold text-center">Hackathons</h1>
        <div className="flex flex-wrap gap-4 container mx-auto overflow-x-auto justify-center">
          {hackathons.map((hackathon) => (
            <HackathonCard key={hackathon.title} {...hackathon} />
          ))}
        </div>
      </section>
    </div>
  );
}
