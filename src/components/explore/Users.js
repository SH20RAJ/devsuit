import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import UserCard from "./UserCard";

export function Users({ users = defaultUsers }) {
  return (
    <Carousel className="w-[80%] max-w-full">
      <CarouselContent className="-ml-1">
        {users.map((user, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="w-full">
                <CardContent className="flex aspect-square items-center justify-center p-4">
                  <UserCard
                    key={user.username}
                    name={user.name}
                    username={user.username}
                    bio={user.bio}
                    skills={user.skills}
                    avatar={user.avatar}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

const defaultUsers = [
  {
    name: "Linus Torvalds",
    username: "torvalds",
    bio: "Creator of Linux and Git",
    skills: [
      {name:"Linux", bgcolor:"#FF5733", color:"#FFFFFF"}, 
      {name:"Git", bgcolor:"#33FF57", color:"black"}, 
      {name:"C", bgcolor:"#3357FF", color:"#FFFFFF"}
    ],
    avatar: "https://github.com/torvalds.png"
  },{
    name: "Dan Abramov",
    username: "gaearon",
    bio: "Co-author of Redux and Create React App",
    skills: [
      {name:"React", bgcolor:"#FF5733", color:"#FFFFFF"}, 
      {name:"JavaScript", bgcolor:"#33FF57", color:"black"}, 
      {name:"Redux", bgcolor:"#3357FF", color:"#FFFFFF"}
    ],
    avatar: "https://github.com/gaearon.png"
  },{
    name: "Evan You",
    username: "yyx990803",
    bio: "Creator of Vue.js",
    skills: [
      {name:"Vue.js", bgcolor:"#FF5733", color:"#FFFFFF"}, 
      {name:"JavaScript", bgcolor:"#33FF57", color:"black"}, 
      {name:"HTML", bgcolor:"#3357FF", color:"#FFFFFF"}
    ],
    avatar: "https://github.com/yyx990803.png"
  },{
    name: "Guido van Rossum",
    username: "gvanrossum",
    bio: "Creator of Python",
    skills: [
      {name:"Python", bgcolor:"#FF5733", color:"#FFFFFF"}, 
      {name:"Software Design", bgcolor:"#33FF57", color:"black"}
    ],
    avatar: "https://github.com/gvanrossum.png"
  },{
    name: "Brendan Eich",
    username: "BrendanEich",
    bio: "Creator of JavaScript",
    skills: [
      {name:"JavaScript", bgcolor:"#FF5733", color:"#FFFFFF"}, 
      {name:"Web Development", bgcolor:"#33FF57", color:"black"}
    ],
    avatar: "https://github.com/BrendanEich.png"
  },
  {
    name: "Addy Osmani",
    username: "addyosmani",
    bio: "Google Chrome engineer",
    skills: [
      {name:"JavaScript", bgcolor:"#FF5733", color:"#FFFFFF"}, 
      {name:"Performance", bgcolor:"#33FF57", color:"black"}, 
      {name:"Web Development", bgcolor:"#3357FF", color:"#FFFFFF"}
    ],
    avatar: "https://github.com/addyosmani.png"
  }
]
