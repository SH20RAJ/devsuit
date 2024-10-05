import { useState } from 'react';
import { Avatar, Button, Card, CardFooter } from '@nextui-org/react';
import {
  BellIcon,
  BriefcaseIcon,
  HeartCrackIcon,
  HomeIcon,
  LockIcon,
  SettingsIcon,
  TreePalmIcon,
} from 'lucide-react';
import Image from 'next/image';

export default function Sidebar() {
  const [active, setActive] = useState("Dashboard");

  return (
    <div>
      {/* Sidebar Top Section */}
      <div>
        {/* User Profile */}
        <div className="mb-8 p-4 rounded-lg shadow-md">
          <UserCard />
                  </div>

        {/* Navigation Links */}
        <nav className="space-y-4">
          <Button
            auto
            light
            className={`flex items-center gap-2 w-full justify-start ${
              active === "Dashboard" ? "bg-gray-700" : ""
            }`}
            onClick={() => setActive("Dashboard")}
          >
            <HomeIcon className="w-5 h-5" /> Dashboard
          </Button>

          <Button
            auto
            light
            className={`flex items-center gap-2 w-full justify-start ${
              active === "Hackathons" ? "bg-gray-700" : ""
            }`}
            onClick={() => setActive("Hackathons")}
          >
            <TreePalmIcon className="w-5 h-5" /> Hackathons
          </Button>

          <Button
            auto
            light
            className={`flex items-center gap-2 w-full justify-start ${
              active === "Teams" ? "bg-gray-700" : ""
            }`}
            onClick={() => setActive("Teams")}
          >
            <BriefcaseIcon className="w-5 h-5" /> Teams
          </Button>

          <Button
            auto
            light
            className={`flex items-center gap-2 w-full justify-start ${
              active === "Jobs" ? "bg-gray-700" : ""
            }`}
            onClick={() => setActive("Jobs")}
          >
            <BriefcaseIcon className="w-5 h-5" /> Jobs
          </Button>

          <Button
            auto
            light
            className={`flex items-center gap-2 w-full justify-start ${
              active === "Settings" ? "bg-gray-700" : ""
            }`}
            onClick={() => setActive("Settings")}
          >
            <SettingsIcon className="w-5 h-5" /> Settings
          </Button>

          <Button
            auto
            light
            className={`flex items-center gap-2 w-full justify-start ${
              active === "Notifications" ? "bg-gray-700" : ""
            }`}
            onClick={() => setActive("Notifications")}
          >
            <BellIcon className="w-5 h-5" /> Notifications
          </Button>

          <Button
            auto
            light
            className={`flex items-center gap-2 w-full justify-start ${
              active === "Privacy" ? "bg-gray-700" : ""
            }`}
            onClick={() => setActive("Privacy")}
          >
            <LockIcon className="w-5 h-5" /> Privacy
          </Button>
        </nav>
      </div>
      
      {/* Sidebar Bottom Section */}
      <div className="mt-auto">
        <Button auto shadow color="error">
          <HeartCrackIcon className="w-5 h-5" /> Logout
        </Button>
      </div>
    </div>
  );
}




export  function UserCard() {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <img
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src="https://nextui.org/images/hero-card.jpeg"
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Shaswat Raj</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          Edit Profile
        </Button>
      </CardFooter>
    </Card>
  );
}