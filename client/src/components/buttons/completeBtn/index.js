import React from 'react';
import './completeBtn.css'
import API from '../../../utils/api';
import { useAppContext } from '../../../utils/globalContext';

export default function CompleteBtn({props}){
  const [state, dispatch] = useAppContext()

  function handleUpdate(data){
    API.updateTodo(data)
    .then(res => {
      loadTodos()
    })
    .catch(err => {
      console.log(err)
    })
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
      <button data-todo-id={props.id} data className="completeBtn" onClick={() => handleUpdate({id: props.id, completed: props.completed})}>Complete</button>
    </div>
  )
}