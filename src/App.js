import React from 'react'
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Header from './component/Header';
import {BrowserRouter, HashRouter, Route, Router, Routes } from 'react-router-dom';
import Users from './Pages/Users';
import UserDetails from './Pages/UserDetails';
import NotFound from './Pages/NotFound';
import StudentDetails from './Pages/StudentDetails';

import Marks from './Pages/Marks';
import Fees from './Pages/Fees';
import Remarks from './Pages/Remarks';
function App() {
  return (

    
    <div className="App">

      
      
      

      
        
      <BrowserRouter>
      


     

      

     
       <Routes>
         
         <Route path = "/" element = {<Header />} >
           <Route index element={<Home />}/>
           <Route path = "home" element={<Home />}/>
         <Route path = "about" element={<About/>} />
         <Route path = "services" element={<Services/>} />
         <Route path = "portfolio" element={<Portfolio />} />
         <Route path = "portfolio"  >

             <Route path = ":studentId" element={ <StudentDetails/>} > 
                        <Route index element={<Marks/>}></Route>
                        <Route path="fees" element={<Fees/>}></Route>
                        <Route path="remarks" element={<Remarks/>}></Route>
              </Route> 

         </Route>
         <Route path = "contact" element={<Contact/>} />
         <Route path = "users" element={<Users/>} />
          <Route path = "users" >
              <Route path = ":userId" element={<UserDetails />} />
          </Route>
          <Route path = "*" element={ <NotFound/>} />
          
         </Route>
         
         
        

       </Routes>
       </BrowserRouter>
      

      
      
      
      

      
      
      

      


    
    </div>
   
  );
}

export default App;
