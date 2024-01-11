import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom';
import LoginInOutlet from '../outlet/LoginInOutlet';
import {clearUserInfo} from '../Utils/common';

export default function Header() {
  return (
    <div>

        <header>
    <nav>
      <ul>
       



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
        <li><NavLink className="logout" to = "login" onClick={()=>{
            clearUserInfo();
        }}>Logout</NavLink></li>


      </ul>
    </nav>
  </header>


   <div className='body'>
          <LoginInOutlet />
    
   </div>
    </div>

    
  )
}
