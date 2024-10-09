import UserCard from '@/components/explore/UserCard'
import { Users } from '@/components/explore/Users'
import React from 'react'

export default function page() {

  let users = [
    {
      name: "Shaswat Raj",
      username: "sh20raj",
      bio: "I am a web developer",
      skills: [
        {name:"Web Development", bgcolor:"#FF5733", color:"#FFFFFF"}, 
        {name:"React", bgcolor:"#33FF57", color:"black"}, 
        {name:"JavaScript", bgcolor:"#3357FF", color:"#FFFFFF"}, 
        {name:"Next.js", bgcolor:"#FF33A1", color:"#FFFFFF"}, 
        {name:"Tailwind CSS", bgcolor:"#33FFF5", color:"blue"}, 
        {name:"HTML", bgcolor:"#FF8C33", color:"#FFFFFF"}, 
        {name:"CSS", bgcolor:"#8C33FF", color:"#FFFFFF"}
      ],
      avatar: "https://github.com/sh20raj.png"
    },{
      name: "Shaswat Raj",
      username: "sh20raj",
      bio: "I am a web developer",
      skills: [
        {name:"Web Development", bgcolor:"#FF5733", color:"#FFFFFF"}, 
        {name:"React", bgcolor:"#33FF57", color:"black"}, 
        {name:"JavaScript", bgcolor:"#3357FF", color:"#FFFFFF"}, 
        {name:"Next.js", bgcolor:"#FF33A1", color:"#FFFFFF"}, 
        {name:"Tailwind CSS", bgcolor:"#33FFF5", color:"blue"}, 
        {name:"HTML", bgcolor:"#FF8C33", color:"#FFFFFF"}, 
        {name:"CSS", bgcolor:"#8C33FF", color:"#FFFFFF"}
      ],
      avatar: "https://github.com/sh20raj.png"
    },{
      name: "Shaswat Raj",
      username: "sh20raj",
      bio: "I am a web developer",
      skills: [
        {name:"Web Development", bgcolor:"#FF5733", color:"#FFFFFF"}, 
        {name:"React", bgcolor:"#33FF57", color:"black"}, 
        {name:"JavaScript", bgcolor:"#3357FF", color:"#FFFFFF"}, 
        {name:"Next.js", bgcolor:"#FF33A1", color:"#FFFFFF"}, 
        {name:"Tailwind CSS", bgcolor:"#33FFF5", color:"blue"}, 
        {name:"HTML", bgcolor:"#FF8C33", color:"#FFFFFF"}, 
        {name:"CSS", bgcolor:"#8C33FF", color:"#FFFFFF"}
      ],
      avatar: "https://github.com/sh20raj.png"
    },{
      name: "Shaswat Raj",
      username: "sh20raj",
      bio: "I am a web developer",
      skills: [
        {name:"Web Development", bgcolor:"#FF5733", color:"#FFFFFF"}, 
        {name:"React", bgcolor:"#33FF57", color:"black"}, 
        {name:"JavaScript", bgcolor:"#3357FF", color:"#FFFFFF"}, 
        {name:"Next.js", bgcolor:"#FF33A1", color:"#FFFFFF"}, 
        {name:"Tailwind CSS", bgcolor:"#33FFF5", color:"blue"}, 
        {name:"HTML", bgcolor:"#FF8C33", color:"#FFFFFF"}, 
        {name:"CSS", bgcolor:"#8C33FF", color:"#FFFFFF"}
      ],
      avatar: "https://github.com/sh20raj.png"
    },{
      name: "Shaswat Raj",
      username: "sh20raj",
      bio: "I am a web developer",
      skills: [
        {name:"Web Development", bgcolor:"#FF5733", color:"#FFFFFF"}, 
        {name:"React", bgcolor:"#33FF57", color:"black"}, 
        {name:"JavaScript", bgcolor:"#3357FF", color:"#FFFFFF"}, 
        {name:"Next.js", bgcolor:"#FF33A1", color:"#FFFFFF"}, 
        {name:"Tailwind CSS", bgcolor:"#33FFF5", color:"blue"}, 
        {name:"HTML", bgcolor:"#FF8C33", color:"#FFFFFF"}, 
        {name:"CSS", bgcolor:"#8C33FF", color:"#FFFFFF"}
      ],
      avatar: "https://github.com/sh20raj.png"
    },
    {
      name: "Shaswat Raj",
      username: "sh20raj",
      bio: "I am a web developer",
      skills: [
        {name:"Web Development", bgcolor:"#FF5733", color:"#FFFFFF"}, 
        {name:"React", bgcolor:"#33FF57", color:"black"}, 
        {name:"JavaScript", bgcolor:"#3357FF", color:"#FFFFFF"}, 
        {name:"Next.js", bgcolor:"#FF33A1", color:"#FFFFFF"}, 
        {name:"Tailwind CSS", bgcolor:"#33FFF5", color:"blue"}, 
        {name:"HTML", bgcolor:"#FF8C33", color:"#FFFFFF"}, 
        {name:"CSS", bgcolor:"#8C33FF", color:"#FFFFFF"}
      ],
      avatar: "https://github.com/sh20raj.png"
    }
  ]
  return (
    <div>
      {/* {users.map((user) => (
        <UserCard
          key={user.username}
          name={user.name}
          username={user.username}
          bio={user.bio}
          skills={user.skills}
          avatar={user.avatar}
        />
      ))} */}

      <div className='flex flex-col justify-center items-center w-full'>
        <Users users={users} />
      </div>
    </div>
  )
}

