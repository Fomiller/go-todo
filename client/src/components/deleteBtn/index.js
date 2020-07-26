import React from 'react';
import './deleteBtn.css'
import API from '../../utils/api';

export default function DeleteBtn({props}){

  // delete a todo
  function handleDelete (id) {
    var data = {id: id}
    console.log("this is the ID React: ", data)
    API.deleteTodo(data)
    .then(res => {
      console.log("deleted")
    })
    .catch(err => console.log(err))
  }


  return(
    <div>
      <button data-todo-id={props.id} className="deleteBtn" onClick={() => handleDelete(props.id)}>Delete</button>
    </div>
  )
}