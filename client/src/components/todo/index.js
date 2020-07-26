import React from 'react';
import CompleteBtn from '../completeBtn';
import DeleteBtn from '../deleteBtn';

export default function Todo(props){
  return(
    <div>
      <h2>{props.info.todo}</h2>
      <h2>{props.info.time}</h2>
      {!props.info.completed ? (<h4>Completed: false</h4>) : (<h4>Completed: true</h4>)}
      <CompleteBtn props={props.info}/>
      <DeleteBtn props={props.info}/>
    </div>
  )
}