import React,{useState,useEffect} from 'react'
import { useParams, useLocation, useNavigate, NavLink, Outlet } from 'react-router-dom'
import './StudentDetais.css';
import axios from 'axios';



export default function StudentDetails() {
    const {studentId} = useParams();
    
    

    const location = useLocation();
    const state = location.state || {};
  
    
    const navigate  = useNavigate();

    const [student,setStudent]= useState(state.data);
   
   
    useEffect(()=>{
        if(!student){
        axios("../data.json")
        .then((response)=>{
            const data = response.data;
            setStudent(data.find((item)=> item.id===parseInt(studentId)));
        })
        }
        

    },[studentId]);

    

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
               
                <NavLink to="" end className="tab-btn">Marks</NavLink>
                <NavLink to="fees" className="tab-btn">Fees</NavLink>
                <NavLink to="remarks" className="tab-btn">Remarks</NavLink>

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
