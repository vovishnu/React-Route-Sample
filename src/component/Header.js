import React from 'react'

import LoginInOutlet from '../outlet/LoginInOutlet';
import {clearUserInfo} from '../Utils/common';
import PrivateNavLink from '../Links/PrivateNavLink';

export default function Header() {
  return (
    <div>

        <header>
    <nav>
      <ul>
       



        <li><PrivateNavLink to = "home" className={(obj)=>{
          const {isActive}=obj;
          return "test-me " + (isActive ? "active":"");
        }}>Home</PrivateNavLink></li>
        <li><PrivateNavLink to = "about" style={(obj)=>{
          
        }}>About</PrivateNavLink></li>
        <li><PrivateNavLink to = "services">Services</PrivateNavLink></li>
        <li><PrivateNavLink to = "portfolio">Portfolio</PrivateNavLink></li>
        <li><PrivateNavLink to = "users">Users</PrivateNavLink></li>
        <li><PrivateNavLink to = "contact">Contact</PrivateNavLink></li>
        <li><PrivateNavLink className="logout" to = "login" onClick={()=>{
            clearUserInfo();
        }}>Logout</PrivateNavLink></li>


      </ul>
    </nav>
  </header>


   <div className='body'>
          <LoginInOutlet />
    
   </div>
    </div>

    
  )
}
