import React from 'react'
import { NavLink, useResolvedPath } from 'react-router-dom'
import {isPathAllowed} from '../Utils/common';
export default function PrivateNavLink(props) {



  const to  = props.to;

  const path = useResolvedPath(to);
 
  const allowed = isPathAllowed(path.pathname);

  return (
    allowed &&  <NavLink {...props} />
  )
}
