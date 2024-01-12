import React from 'react'
import { Link, Navigate, NavLink, Outlet, useLocation } from 'react-router-dom';
import {isLoggedIn,isPathAllowed} from '../Utils/common';
export default function LoginInOutlet() {
  

    const {pathname} = useLocation();
    const allowed = isPathAllowed(pathname);
    
    if(isLoggedIn() && allowed){
        return (<Outlet/>);
    }else{
        return <Navigate to ="/login" />
    }

  
    
}
