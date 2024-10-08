import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Blogs } from "@/components/explore/Blogs";
import { SearchAnything } from "@/components/SearchAnything";
import { MeteorCard } from "@/components/explore/MeteorCard";
import { Users } from "@/components/explore/Users";

export default function page() {
  const hackathons = [
    {
      title: "Google Hash Code 2024",
      description: "A team programming competition organized by Google.",
    },
    {
      title: "Microsoft Imagine Cup 2024",
      description:
        "A global competition for students to create technology solutions.",
    },
    {
      title: "Amazon Alexa Skills Challenge 2024",
      description: "A challenge to develop new skills for Amazon Alexa.",
    },
  ];
  return (
    <div className="flex justify-center items-center border w-full flex-col">
      <div className="min-h-[50vh]">
        <SearchAnything />
      </div>

      <section>
        <div className="flex flex-col justify-center items-center w-full">
          <Users />
        </div>
      </section>

      <section className="flex flex-col mt-10 justify-center my-10   h-screen container">
        <h1 className="text-2xl text-center font-bold mx-20 mb-4">Explore</h1>
        <hr className="w-full h-1 bg-blue-500 rounded-full m-4" />
        <div className="flex justify-center items-center md:flex-row flex-col gap-10">
          <Blogs />
          <div className="flex flex-col ">
            <h1 className="text-2xl text-center font-bold mx-20">Hackathons</h1>
            <hr className="w-full h-1 bg-blue-500 rounded-full m-4" />
            <div className="flex flex-col gap-10">
              {hackathons.map((hackathon) => (
                <MeteorCard
                  key={hackathon.id}
                  title={hackathon.title}
                  description={hackathon.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Dashboard Overview Component
const DashboardOverview = ({ userStats }) => (
  <Card className="bg-white shadow-md rounded-lg p-4 mb-6">
    <h1 size="h2" className="mb-4">
      Welcome back, [User]!
    </h1>
    <span className="mb-4">Here's what you can do today:</span>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {userStats.map((stat) => (
        <Card
          key={stat.title}
          className={`p-4 rounded-lg shadow ${stat.bgColor}`}
        >
          <span className="text-lg font-semibold">{stat.title}</span>
          <span className="text-2xl font-bold">{stat.value}</span>
        </Card>
      ))}
    </div>
  </Card>
);

// Active Hackathons Component
const ActiveHackathons = ({ hackathons }) => (
  <Card className="bg-white shadow-md rounded-lg p-4 mb-6">
    <h1 size="h2" className="mb-4">
      Active Hackathons
    </h1>
    {hackathons.map((hackathon) => (
      <Card key={hackathon.id} className="border-l-4 border-blue-500 p-4 mb-4">
        <h1 size="h3" className="font-semibold">
          {hackathon.title}
        </h1>
        <span>Date: {hackathon.date}</span>
        <span>Join your team to work on exciting projects!</span>
        <Button variant="outline" className="mt-2">
          View Details
        </Button>
      </Card>
    ))}
  </Card>
);

// Job Opportunities Component
const JobOpportunities = ({ jobs }) => (
  <Card className="bg-white shadow-md rounded-lg p-4 mb-6">
    <h1 size="h2" className="mb-4">
      Job Opportunities
    </h1>
    {jobs.map((job) => (
      <Card key={job.id} className="border-l-4 border-green-500 p-4 mb-4">
        <h1 size="h3" className="font-semibold">
          {job.title}
        </h1>
        <span>{job.company}</span>
        <Button variant="outline" className="mt-2">
          Apply Now
        </Button>
      </Card>
    ))}
  </Card>
);

// Notifications Component
const Notifications = ({ notifications }) => (
  <Card className="bg-white shadow-md rounded-lg p-4 mb-6">
    <h1 size="h2" className="mb-4">
      Notifications
    </h1>
    {notifications.map((notification, index) => (
      <Card key={index} className="border-l-4 border-yellow-500 p-4 mb-4">
        <span>{notification.message}</span>
      </Card>
    ))}
  </Card>
);

// Resources Component
const Resources = ({ resources }) => (
  <Card className="bg-white shadow-md rounded-lg p-4 mb-6">
    <h1 size="h2" className="mb-4">
      Resources
    </h1>
    <ul className="space-y-2">
      {resources.map((resource) => (
        <li key={resource.id}>
          <a href={resource.link} className="text-blue-500 hover:underline">
            {resource.title}
          </a>
        </li>
      ))}
    </ul>
  </Card>
);

// Main Section Component
const MainSection = ({
  userStats,
  hackathons,
  jobs,
  notifications,
  resources,
}) => (
  <main className="flex-1 bg-gray-100 p-6">
    <DashboardOverview userStats={userStats} />
    <ActiveHackathons hackathons={hackathons} />
    <JobOpportunities jobs={jobs} />
    <Notifications notifications={notifications} />
    <Resources resources={resources} />
    <Button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
      Join a Hackathon
    </Button>
  </main>
);
