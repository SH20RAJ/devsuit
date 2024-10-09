import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturedSection() {
  const features = [
    {
      title: "Empowering Developers",
      description:
        "DevSuit is designed for students, developers, and tech enthusiasts to showcase their skills and collaborate on innovative projects.",
      icon: <IconTerminal2 />,
    },
    {
      title: "User-Friendly Interface",
      description:
        "Navigate through DevSuit with ease, making it simple to connect with peers and industry professionals.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Affordable Access",
      description:
        "Join hackathons and events without financial barriers. No hidden fees, no credit card required.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Reliable Platform",
      description: "Experience uninterrupted access to DevSuit's features and services.",
      icon: <IconCloud />,
    },
    {
      title: "Collaborative Environment",
      description: "Form teams and work together seamlessly on projects and hackathons.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 Support",
      description:
        "Our support team and AI agents are available around the clock to assist you.",
      icon: <IconHelp />,
    },
    {
      title: "Satisfaction Guaranteed",
      description:
        "If you're not satisfied with DevSuit, we're here to make it right.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Comprehensive Features",
      description: "Explore a wide range of tools and resources to enhance your tech journey.",
      icon: <IconHeart />,
    },
  ];
  return (
    (<div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>)
  );
}

const Feature = ({
  title,
  description,
  icon,
  index
}) => {
  return (
    (<div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}>
      {index < 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div
        className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span
          className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p
        className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>)
  );
};
