import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='page-not-found'>

        <div>
        <h1>Sorry ! Page Not Found</h1>

        </div>
        <div>

            <Link to="home" >Back To Home</Link>

        </div>

    </div>
  )
}
