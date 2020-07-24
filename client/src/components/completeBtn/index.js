import React from 'react';
import './completeBtn.css'

export default function CompleteBtn({props}){
  console.log(props)
  return(
    <div>
      <button data-todo-id={props.id} class="completeBtn">Complete</button>
    </div>
  )
}