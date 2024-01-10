import React from 'react'
import { useOutletContext } from 'react-router-dom';

export default function Remarks(props) {
 
 
    const {remakrs}= useOutletContext();
    
    
    return (
    <div>

        <div>

                {remakrs}

            
        </div>

    </div>
  )
}
