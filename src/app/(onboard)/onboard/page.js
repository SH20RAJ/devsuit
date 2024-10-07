import { redirect } from 'next/navigation'
import React from 'react'

export default function page() {
  redirect("/settings");
  return (
    <div>
        <h1>Onboard</h1>
    </div>
  )
}
