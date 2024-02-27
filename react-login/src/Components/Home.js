import React from 'react'
import { useLocation } from 'react-router-dom'
export default function Home() {

    const location =useLocation()
  return (
    <div className='Homepage'>
        <h1>Hello {location.state.id} and Welcome to the Home Page</h1>
    </div>
  )
}
