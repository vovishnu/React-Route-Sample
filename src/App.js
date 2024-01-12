import React,{Suspense} from 'react'
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';

import Contact from './Pages/Contact';
import Header from './component/Header';
import {HashRouter, BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Users from './Pages/Users';
import UserDetails from './Pages/UserDetails';
import NotFound from './Pages/NotFound';
import StudentDetails from './Pages/StudentDetails';

import Marks from './Pages/Marks';
import Fees from './Pages/Fees';
import Remarks from './Pages/Remarks';
import Login from './component/Login';



const Portfolio = React.lazy(()=>{
   return import("./Pages/Portfolio");
})

function App() {
  return (

    
    <div className="App">

      
      
      

      
        
      <BrowserRouter basename='React-Route-Sample'>
      


     

      

        
        <Suspense fallback={<div className='spinner'></div>}>
       <Routes>
      
         <Route path="/login" element={<Login/>} />






         <Route path = "/" element = {<Header />} >
              <Route index element={<Home />}/>
              <Route path = "home" element={<Home />}/>
              <Route path = "about" element={<About/>} />
              <Route path = "services" element={<Services/>} />
              <Route path = "portfolio" element={<Portfolio />} />
              <Route path = "portfolio"  >

                    <Route path = ":studentid" element={ <StudentDetails/>} > 
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
       </Suspense>
       </BrowserRouter>
      

      
      
      
      

      
      
      

      


    
    </div>
   
  );
}

export default App;
