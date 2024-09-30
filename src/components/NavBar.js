import { RocketIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div className="top-0 sticky backdrop-blur z-50">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <RocketIcon className="h-6 w-6 text-primary" />
          <span className="ml-2 text-2xl font-bold">DevSuit</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            For Students
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            For Companies
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            About
          </Link>
        </nav>
      </header>
    </div>
  );
}
