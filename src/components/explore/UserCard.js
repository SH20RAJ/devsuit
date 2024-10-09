"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MessageCircleCode } from "lucide-react";

export default function UserCard({ name, username, bio, skills, avatar }) {
  return (
    <div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}

      className="w-full"
    >
      <Card className="max-w-sm w-full mx-auto shadow-lg rounded-lg overflow-hidden">
        <CardHeader className="flex items-center p-4">
          <Avatar className="w-24 h-24">
            <AvatarImage src={avatar} alt="User avatar" />
            <AvatarFallback className="text-white">
              {name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <CardTitle className="text-lg font-semibold">{name}</CardTitle>
            <CardDescription className="text-sm">
              <Button variant="link" className="">
                @{username}
              </Button>
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="p-4">
          <p className="text-sm">{bio}</p>
          <hr className="mb-4" />
          <div className="flex flex-wrap mt-2">
            {skills.map((skill) => (
              <Button
                key={skill.name}
                className="text-xs h-5 font-medium mr-2 mb-2 px-2.5 py-0.5 rounded"
              >
                {skill.name}
              </Button>
            ))}
          </div>
        </CardContent>
        <hr />
        <CardFooter className="flex justify-between items-center p-4 gap-2">
          <Button className="text-sm w-full rounded-lg px-4 py-2">
            Follow
          </Button>
          <Button className="text-sm border rounded-lg px-4 py-2">
            <MessageCircleCode className="w-4 h-4 " />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
