import React from 'react';
import './deleteBtn.css'
import API from '../../../utils/api';
import { useAppContext } from '../../../utils/globalContext';

export default function DeleteBtn({props, onClick}){
  const [state, dispatch] = useAppContext();


  // delete a todo
  function handleDelete (id) {
    var data = {id: id}
    API.deleteTodo(data)
    .then(res => {
      console.log("deleted",res.status)
    })
    .then(
      loadTodos()
    )
    .catch(err => console.log(err))
  }

  function loadTodos() {
    API.getTodos()
    .then(res => {
      dispatch({type: "SET_TODOS", payload:res.data});
    })
    .catch(err => console.log(err));
  }

  return(
    <div>
      <button data-todo-id={props.id} className="deleteBtn" onClick={() => handleDelete(props.id)}>Delete</button>

    </div>
  )
}