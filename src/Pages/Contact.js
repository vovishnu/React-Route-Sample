import React,{Suspense, useState} from 'react'


const MySection  = React.lazy(()=>{
    return import(/*webpackChunkName:"my-chunk-file"*/"../component/Section");
});

export default function Contact() {
  
 


  const [state, setState] = useState(false);
  
  
  return (
    <div>


         <section id="contact">

         
         <h2>Contact Us</h2>
         <p>Contact information goes here.</p>
         </section>


          {
            state &&   (<Suspense fallback={<div>Loading...</div>}>
                            <MySection />
            </Suspense> )
          }


         <button onClick={()=>{
          setState(true);
         }}>Details</button>
        



    </div>
  )
}
