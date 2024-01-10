import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Users.css';
import { Link , useSearchParams, useNavigate} from 'react-router-dom';

export default function Users() {
  
     const [data, setUsers] = useState([]);


     const [serachPrams, setSearchParams] = useSearchParams();
     const nameSerach = serachPrams.get("name");
  
     useEffect(()=>{
        axios("https://jsonplaceholder.org/users")
        .then((response)=>{
            setUsers(response.data);
        })
     },[]);


     const onSerachNameChange = (event)=>{
       setSearchParams({
        name:event.target.value
       });
     }

     const navigate = useNavigate();
  
    return (
    <div>

        <div className='serach-filter'>
            
            Serach Name: <input onChange={onSerachNameChange}/>

        </div>



        {
            data.filter((item)=>{
                if(!nameSerach){
                        return true
                }else{
                    
                    return item.firstname.toLowerCase().includes(nameSerach.toLowerCase()) || item.lastname.toLowerCase().includes(nameSerach.toLowerCase()) ;
                }
            })
            .map((item)=>{
                return (<div className='userNamesList' onClick={()=>{

                    navigate(`${item.id}`,{
                        state:{
                            data:item
                        }
                    });
                }}>
                
                <div className='user-name'>
                <Link  to={`${item.id}`}>{item.firstname}  {item.lastname}</Link>
                


                </div>
                <div className='user-email'>
                {item.email}
                </div>
                <div className='user-dateofbirth'>
                {item.birthDate}
                </div>
                
                </div>);
            })
        }

    </div>
  )
}
