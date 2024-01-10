import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
export default function Header() {
  return (
    <div>

        <header>
    <nav>
      <ul>
       


        {/* <li><Link to = "home" className='active'>Home</Link></li>
        <li><Link to = "about">About</Link></li>
        <li><Link to = "services">Services</Link></li>
        <li><Link to = "portfolio">Portfolio</Link></li>
        <li><Link to = "contact">Contact</Link></li> */}



        <li><NavLink to = "home" className={(obj)=>{
          const {isActive}=obj;
          return "test-me " + (isActive ? "active":"");
        }}>Home</NavLink></li>
        <li><NavLink to = "about" style={(obj)=>{
          
        }}>About</NavLink></li>
        <li><NavLink to = "services">Services</NavLink></li>
        <li><NavLink to = "portfolio">Portfolio</NavLink></li>
        <li><NavLink to = "users">Users</NavLink></li>
        <li><NavLink to = "contact">Contact</NavLink></li>


      </ul>
    </nav>
  </header>


   <div className='body'>

    <Outlet/>
   </div>
    </div>

    
  )
}
