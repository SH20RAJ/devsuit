
import Navbar from '@/components/explore/NavBar'
import { SearchAnything } from '@/components/SearchAnything'
import React from 'react'

export default function layout({ children }) {
  return (
    <div>
      <Navbar/>
      <SearchAnything/>
      <div className="container">
        {children}
      </div>
    </div>
  )
}
