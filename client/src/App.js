import React, {useState, useEffect} from 'react';
import Todo from './components/todo';
import './App.css';
import API from './utils/api';



function App() {
  // establish state
  const [todos, setTodos] = useState([])
  const [formObject, setFormObject] = useState({
    Todo: "",
    Completed: false,
  })

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

  function handleInputChange(event) {
    const {name, value} = event.target
    setFormObject({...formObject, [name]: value})
    console.log(formObject);
  }
  
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.Todo) {
      API.createTodo({
        Todo: formObject.Todo,
        Completed: formObject.Completed,
        Time: formObject.Time,
      })
        .then(()=> setFormObject({
          Todo: "",
          Completed: "",
          Time: "",
        }))
        .then(() => loadTodos())
        .catch(err => console.log(err));
    }
  }

  return (
    <div className="App">
      <form >
        <input type="text" name="Todo" placeholder="Add a Todo" onChange={handleInputChange}autoFocus={true}/>
        {/* <input type="submit"></input> */}
      </form>
      <button onClick={handleFormSubmit}>Add Todo</button>
      {/* render todo compoent for each todo loaded. */}
      { todos.map( todo => (
        <Todo info={todo}/>
      )) }
    </div>
  );
}

export default App;
