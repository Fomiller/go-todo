import React from 'react';
import './completeBtn.css'

export default function CompleteBtn({props, onClick}){

  return(
    <div>
      <button data-todo-id={props.id} className="completeBtn" onClick={onClick}>Complete</button>
    </div>
  )
}