import React, {useEffect} from 'react';
import TodoForm from '../components/form';
import DeleteBtn from '../components/buttons/deleteBtn'
import CompleteBtn from '../components/buttons/completeBtn'
import Todo from '../components/todo';
import '../App.css';
import {useAppContext} from '../utils/globalContext';
import API from '../utils/api';
import Container from '../components/container';

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

  // if no todos 
  if (!state.todos) {
    return(
      <Container>
        <TodoForm/>
      </Container>
    )
  }
  // if todos
  else {
    return (
      <Container>
        <TodoForm/>
        { state.todos.map( todo => (
          <Todo props={todo} key={todo.id}>
            <CompleteBtn props={todo}/>
            <DeleteBtn props={todo}/>
          </Todo>
        )) }
      </Container>
    )
  }
}