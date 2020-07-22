import React from 'react';

export default function Todo(props){
  console.log(props)
  return(
    <div>
      <h2>{props.info.Todo}</h2>
      {!props.info.Completed ? (<h4>false</h4>) : (<h4>true</h4>)}
      <p>{props.info.Time}</p>
    </div>
  )
}