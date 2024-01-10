import React from 'react'

export default function MyRoute(props) {
  
    
    const href = window.location.href;
    const obj = new URL(href);
    const path = obj.pathname.substring(1);

    const {children}= props;

    
    return (
    <div>

        {React.Children.toArray(children).find((item)=> item.props.path===path)}

    </div>
  )
}
