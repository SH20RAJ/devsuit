import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardContent, Card } from "@/components/ui/card";
import Link from "next/link";
import { Code2, Users, Award, Briefcase, Rocket, Search } from "lucide-react";
import Navbar from "./NavBar";
import { VortexDemo } from "./First";
import { Cards } from "./LandingPage/Cards";
import { ToolTip } from "./LandingPage/ToolTip";
import { JoinWaitList } from "./LandingPage/JoinWaitList";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex-col flex justify-center items-center text-center">
        <VortexDemo />
        <section>
          <div className="container px-4 md:px-6">
            <h1 className=" text-4xl m-10">Key Features</h1>
            <Cards />
          </div>
        </section>
        <section className="w-full py-12 flex flex-col items-center justify-center md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  For Students
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Build your profile, showcase your skills, and connect with
                  like-minded peers. Participate in hackathons, find teammates,
                  and explore exciting career opportunities.
                </p>
                <Button>Join as a Student</Button>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  For Companies
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Host hackathons, discover top talent, and engage with a
                  community of skilled developers. Post job openings and connect
                  with potential candidates.
                </p>
                <Button>Partner with Us</Button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h1 className="text-4xl font-bold m-4">Users</h1>
          <ToolTip />
        </section>

        <JoinWaitList />
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 DevSuit. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
