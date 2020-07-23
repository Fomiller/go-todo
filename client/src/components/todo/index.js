import React from 'react';

export default function Todo(props){
  return(
    <div>
      <h2>{props.info.todo}</h2>
      <h2>{props.info.time}</h2>
      <h2>{props.info.id}</h2>
      {!props.info.completed ? (<h4>false</h4>) : (<h4>true</h4>)}
    </div>
  )
}