import React, {useState, useRef} from 'react';
import {useAppContext} from '../../utils/globalContext';
import API from '../../utils/api';

export default function TodoForm(){
  const [state, dispatch] = useAppContext();
  const test = useRef(null);
  const [formObject, setFormObject] = useState({
    Todo: "",
    completed: false,
  });

  function handleInputChange(event) {
    const {name, value} = event.target
    setFormObject({...formObject, [name]: value})
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.Todo) {
      API.createTodo({
        todo: formObject.Todo,
        completed: formObject.Completed,
      })
      .then(()=> setFormObject({
        Todo: "",
        completed: "",
      }))
      .then(()=>{
        test.current.value = "";
      })
      .then(() => loadTodos())
      .catch(err => console.log(err));
    }
  }

  // function handling loading todos
  function loadTodos() {
    API.getTodos()
    .then(res => {
      dispatch({type: "SET_TODOS", payload:res.data});
    })
    .catch(err => console.log(err));
  }

  return(
    <div className="row my-5">
      <div className="col">
        <form className="form-inline d-flex justify-content-center">
          <input
          id="todoInput"
          className="form-control mr-3 "
          ref={test}
          type="text"
          name="Todo"
          placeholder="Add a Todo"
          onChange={handleInputChange}
          autoFocus={true}
          />
          <button className="btn btn-success my-2" onClick={handleFormSubmit}>Add Todo</button>
        </form>
      </div>
    </div>
  )
}