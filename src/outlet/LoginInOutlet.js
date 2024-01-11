import React from 'react'
import { Link, Navigate, NavLink, Outlet} from 'react-router-dom';
import {isLoggedIn} from '../Utils/common';
export default function LoginInOutlet() {
  
    
    if(isLoggedIn()){
        return (<Outlet/>);
    }else{
        return <Navigate to ="/login" />
    }

  
    
}
