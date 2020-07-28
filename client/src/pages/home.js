import React, {useEffect} from 'react';
import TodoForm from '../components/form';
import DeleteBtn from '../components/buttons/deleteBtn'
import CompleteBtn from '../components/buttons/completeBtn'
import Todo from '../components/todo';
import '../App.css';
import {useAppContext} from '../utils/globalContext';
import API from '../utils/api';

export default function Home(){
  const [state, dispatch] = useAppContext();

  useEffect( () => {
    loadTodos()
  },[])

  // function handling loading todos
  function loadTodos() {
    API.getTodos()
    .then(res => {
      dispatch({type: "SET_TODOS", payload:res.data});
    })
    .catch(err => console.log(err));
  }


  if (!state.todos) {
    return(
      <div className="App">
      <TodoForm/>
    </div>
    )
  }
  else {
    return(
      <div className="App">
      <TodoForm/>
      { state.todos.map( todo => (
        <Todo info={todo} key={todo.id}>
          <CompleteBtn props={todo}/>
          <DeleteBtn props={todo}/>
        </Todo>
      )) }
    </div>
    )
  }
}