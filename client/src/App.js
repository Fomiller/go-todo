import React, { useState, useEffect} from 'react';
import Todo from './components/todo';
import './App.css';
import { getTodo } from './utils/api';



function App() {
  // const [todos, setTodos] = useState({})
  const [todos, setTodos] = useState([
    {Todo: "todo-1", Completed: true, Time: "2020-07-22T19:13:46.784Z"},
    {Todo: "todo-2", Completed: false, Time: "2020-07-22T19:13:46.784Z"},
  ])
  // useEffect(()=>{
  //   async function getData() {
  //     const res = await getTodo();
  //     setTodos(res.data)
  //   }
  //   getData()
  // },[])
  const handleSubmit =  async(e) =>{
    e.preventDefault();
    // const res = await getTodo();
    // setTodos(res.data)
    console.log(todos);
  }
  return (
    <div className="App">
      <form action="/api/todo" method="POST">
        <input type="text" name="todo" placeholder="Add a Todo" autoFocus={true}/>
        <input type="submit"></input>
      </form>
      <button onClick={handleSubmit}>click me</button>

      {todos.map(todo =>(
        <Todo info={todo}/>
      ))}
    </div>
  );
}

export default App;
