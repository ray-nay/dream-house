import React,{useContext} from 'react'
import { AuthContext } from '../context/AuthContext';
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
export default function NavBar() 
  {
    const {user, logout} = useContext(AuthContext)
    console.log("User ", user)
 
    const triggerLogout = () =>
    {
     logout()
    }
  
  return (
    <div className='Nav'>
      <nav>
        <h2> House Hunt app</h2>
        <ul>
          {
             user && user.loggedin? 
            <>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/form">Add House</NavLink></li>
              <div onClick={triggerLogout}>Logout</div>
            </>              
            :
            <>
              <li><NavLink to="/signup">SignUp</NavLink></li>
              <li><NavLink to="/login">Login</NavLink></li>
            </>
          }
          {/* <li><NavLink to="/signup">SignUp</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li> */}


        </ul>
      </nav>
    </div>
  )
}