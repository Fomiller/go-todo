import React from 'react';

export default function CompleteBtn({props}){
  console.log(props)
  return(
    <div>
      <button data-todo-id={props.id}>Complete</button>
    </div>
  )
}