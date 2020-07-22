import React from 'react';
import './App.css';
import { getTodo } from './utils/api';


const handleSubmit =  async(e) =>{
  e.preventDefault();
  const res = await getTodo();
  console.log(res);
}

function App() {
  return (
    <div className="App">
      <form action="/api/todo" method="POST">
        <input type="text" name="todo" placeholder="Add a Todo" autoFocus={true}/>
        <input type="submit"></input>
      </form>
      <button onClick={handleSubmit}>click me</button>
    </div>
  );
}

export default App;
