import React, {useState, useEffect} from 'react';
import Todo from './components/todo';
import './App.css';
import API from './utils/api';



function App() {
  const [todos, setTodos] = useState([])

  // load todos when App component renders
  useEffect( () => {
    loadTodos()
  },[])

  // function handling loading todos
  function loadTodos() {
    API.getTodos()
    .then(res => {
      console.log(res.data);
      setTodos(res.data);
    })
    .catch(err => console.log(err));
  }

  const handleSubmit =  async(e) =>{
    e.preventDefault();
    console.log(todos);
  }

  return (
    <div className="App">
      <form action="/api/todo" method="POST">
        <input type="text" name="todo" placeholder="Add a Todo" autoFocus={true}/>
        <input type="submit"></input>
      </form>
      <button onClick={handleSubmit}>click me</button>
      {/* render todo compoent for each todo loaded. */}
      { todos.map( todo => (
        <Todo info={todo} key={todo.Time}/>
      )) }
    </div>
  );
}

export default App;
