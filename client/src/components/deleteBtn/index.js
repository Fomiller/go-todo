import React from 'react';
import './deleteBtn.css'
export default function DeleteBtn({props}){
  return(
    <div>
      <button data-todo-id={props.id} class="deleteBtn">Delete</button>
    </div>
  )
}