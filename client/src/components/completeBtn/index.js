import React from 'react';
import './completeBtn.css'

export default function CompleteBtn({props}){
  return(
    <div>
      <button data-todo-id={props.id} className="completeBtn">Complete</button>
    </div>
  )
}