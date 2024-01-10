import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams , useNavigate, useLocation} from 'react-router-dom'
import './UserDetails.css';

export default function UserDetails() {
    
    const navigate  = useNavigate();
    const location = useLocation();
    const state = location.state || {};
    
    

    const {userId} = useParams();
    const [user, setUser]=  useState(state.data);

    useEffect(()=>{
          if(!user){
          axios("https://jsonplaceholder.org/users/"+userId)
          .then((response)=>{
             setUser(response.data);
            
        })
          }
         
        
        

    },[]);
    
   
  
   if(!user){
      return null;
   }
   
    
    return (
    <div>

        <div className='details'>

            <div className='details-title'>{user.firstname}  {user.lastname}</div>

            <div className='details-details'>

                <ul>
                    <li>Email: {user.email}</li>
                    <li>Birth Date: {user.birthDate}</li>
                    <li>Phone: {user.phone}</li>
                    <li>Website: {user.website}</li>
                </ul>

                 <div>

               <button onClick={()=>{
                navigate('/users',{
                    replace:false
                });
                
               }}>Back</button>
               </div>
            </div>


       
        </div>
        


    </div>
  )
}
