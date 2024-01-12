import React,{useState,useEffect} from 'react'
import { useParams, useLocation, useNavigate, Outlet } from 'react-router-dom'
import './StudentDetais.css';
import axios from 'axios';
import PrivateNavLink from '../Links/PrivateNavLink';



export default function StudentDetails() {
    const {studentid} = useParams();
    
    

    const location = useLocation();
    const state = location.state || {};
  
    
    const navigate  = useNavigate();

    const [student,setStudent]= useState(state.data);
   
   
    useEffect(()=>{
        if(!student){
        axios("../data.json")
        .then((response)=>{
            const data = response.data;
            setStudent(data.find((item)=> item.id===parseInt(studentid)));
        })
        }
        

    },[studentid]);

    

    if(!student){
        return null;
    }

    return (
    <div>
       


        <div className='details'>
            <div className='details-title'>{student.name}</div>
            <div className='details-details'>
                <ul>
                    <li>Class : {student.class}</li>
                    <li>Address: { student.address}</li>
                    <li>Phone: { student.phone}</li>
                    <li>Status : {student.isActive ? "Active":"Not Availalbe"}</li>




                </ul>

              
              <div className ="student-tab">

               

                <div class="tabs">
               
                <PrivateNavLink to="" end className="tab-btn">Marks</PrivateNavLink>
                <PrivateNavLink to="fees" className="tab-btn">Fees</PrivateNavLink>
                <PrivateNavLink to="remarks" className="tab-btn">Remarks</PrivateNavLink>

                </div>

                <div class="tab-content">
                <div class="tab-pane active">
                    
                    <Outlet context={student}></Outlet>

                </div>
                  
                </div>

              </div>


              <div>

                <button onClick={()=>{
                    navigate("..")
                }}>Back</button>
              </div>
            </div>


        </div>



    </div>
  )
}
