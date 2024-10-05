
import Navbar from '@/components/explore/NavBar'
import React from 'react'

export default function layout({ children }) {
  return (
    <div>
      <Navbar/>
      {children}
    </div>
  )
}
