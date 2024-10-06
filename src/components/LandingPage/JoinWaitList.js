"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function JoinWaitList() {
  return (
    <div
      className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1
          className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the DevSuit Community Today
        </h1>
        <p
          className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Whether you're looking to compete, connect, or collaborate, DevSuit is the ultimate platform to achieve your goals in tech.
        </p>
        <Input
          type="text"
          placeholder="Enter your email"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700" />
        <Button variant="primary" className="mt-4 cursor-pointer bg-white text-black rounded-lg px-4 py-2">Sign Up</Button>
        <p className="text-xs text-neutral-500 mt-2">
          By signing up, you agree to our <a href="#" className="underline">Terms & Conditions</a>
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
