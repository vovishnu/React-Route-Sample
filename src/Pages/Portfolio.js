import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Portfolio() {
  
  const [studentList, setStudent] = useState([]);
  
  
  useEffect(()=>{
    axios("data.json")
    .then((response)=>{
         setStudent(response.data);
    })

  },[])




 const navigate = useNavigate();

  return (
    <div>

    <section id="portfolio" className='page'>
        <h2>Portfolio</h2>
        <div className="students">


            {
              studentList.map((student)=>{
                return (<div  className='student-list' onClick={()=>{
                    navigate(`${student.id}`,{
                        state:{
                          data:student
                        }
                    })
                }}>
                
                <div className="student-name">{student.name} </div>
                <div> Class Name: {student.class} </div>

                </div>)
              })
            }


            
        </div>
        </section>

    </div>
  )
}
