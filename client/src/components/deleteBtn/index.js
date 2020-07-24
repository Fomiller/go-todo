import React from 'react';

export default function DeleteBtn({props}){
  return(
    <div>
      <button data-todo-id={props.id}>Delete</button>
    </div>
  )
}