import UserCard from '@/components/explore/UserCard'
import { color } from 'framer-motion'
import React from 'react'

export default function page() {
  return (
    <div>
      <UserCard
        name="Shaswat Raj"
        username="shaswat_raj"
        bio="Passionate developer and tech enthusiast. Love to build and explore new technologies."
        skills={[{name:"Web Development", bgcolor:"#FF5733", color:"#000000"}, {name:"React", bgcolor:"#33FF57", color:"#000000"}, {name:"JavaScript", bgcolor:"#3357FF", color:"#000000"}, {name:"Next.js", bgcolor:"#FF33A1", color:"#000000"}, {name:"Tailwind CSS", bgcolor:"#33FFF5", color:"#000000"}, {name:"HTML", bgcolor:"#FF8C33", color:"#000000"}, {name:"CSS", bgcolor:"#8C33FF", color:"#000000"}]}
        avatar="https://github.com/sh20raj.png"
        isFollowing={false}
        isFollowedBy={true}
        isPending={false}
        isBlocked={false}
        isPrivate={false}
        isVerified={true} 
        isAdmin={false}
        isBanned={false}
        isDeleted={false}
        isSuspended={false}
        isArchived={false}
        isHidden={false}
      />
    </div>
  )
}
