import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardContent, Card } from "@/components/ui/card";
import Link from "next/link";
import { Code2, Users, Award, Briefcase, Rocket, Search } from "lucide-react";
import Navbar from "./NavBar";
import { VortexDemo } from "./First";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex-col flex justify-center items-center text-center">
        <VortexDemo />

        <section className="w-full py-12 flex flex-col items-center justify-center md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Key Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Code2 className="w-12 h-12 text-primary" />
                  <h3 className="text-xl font-bold">Hackathons & Events</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Participate in or host exciting tech events and hackathons.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Users className="w-12 h-12 text-primary" />
                  <h3 className="text-xl font-bold">AI-Powered Matching</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Find the perfect teammates based on shared interests and
                    skills.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Award className="w-12 h-12 text-primary" />
                  <h3 className="text-xl font-bold">Skill Verification</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Earn certifications and badges to validate your expertise.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Briefcase className="w-12 h-12 text-primary" />
                  <h3 className="text-xl font-bold">Job Opportunities</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Explore personalized job and internship recommendations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Search className="w-12 h-12 text-primary" />
                  <h3 className="text-xl font-bold">Project Showcase</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Build and display your portfolio to stand out to employers.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Users className="w-12 h-12 text-primary" />
                  <h3 className="text-xl font-bold">Community</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Connect with peers, mentors, and industry professionals.
                  </p>
                </CardContent>
              </Card>
            </div>
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
        <section className="w-full py-12 flex flex-col items-center justify-center md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join the DevSuit Community Today
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Whether you're looking to compete, connect, or collaborate,
                  DevSuit is the ultimate platform to achieve your goals in
                  tech.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Sign Up</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
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
