import React from 'react';

export default function Todo(props){
  return(
    <div>
      <h2>{props.info.todo}</h2>
      <h2>{props.info.time}</h2>
      {!props.info.completed ? (<h4>Completed: false</h4>) : (<h4>Completed: true</h4>)}
      {props.children}
    </div>
  )
}