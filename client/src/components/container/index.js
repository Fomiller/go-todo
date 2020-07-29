import React from 'react';

// wrapper component utilizing bootstrap container class
export default function Container(props){
  return(
    <div className="container">
      {props.children}
    </div>
  )
}