import React from 'react'
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className='Nav'>
      <nav>
        <h2> House Hunt app</h2>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/form">Add House</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}