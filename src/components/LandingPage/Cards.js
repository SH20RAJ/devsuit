import { HoverEffect } from "../ui/card-hover-effect";

export function Cards() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={features} />
    </div>
  );
}

export const features = [
  {
    title: "Hackathon Hosting",
    description:
      "Enables companies to organize and manage hackathons seamlessly, providing tools for event scheduling, team registration, and project submission.",
    link: "#",
  },
  {
    title: "Student Profiles",
    description:
      "Allows students to create detailed profiles showcasing their skills, projects, and achievements to potential employers and peers.",
    link: "#",
  },
  {
    title: "Team Formation",
    description:
      "Facilitates connections among students to form teams based on complementary skills, allowing them to collaborate effectively during events.",
    link: "#",
  },
  {
    title: "Skill Verification",
    description:
      "Provides a system for validating student skills through certifications and endorsements from peers and industry professionals.",
    link: "#",
  },
  {
    title: "Job & Internship Opportunities",
    description:
      "Connects students with potential employers, offering them relevant job and internship opportunities based on their skills and profiles.",
    link: "#",
  },
  {
    title: "Networking & Collaboration",
    description:
      "A platform where students can network with industry professionals, attend workshops, and collaborate on real-world projects.",
    link: "#",
  },
];
