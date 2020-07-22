import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <form action="/api/todo" method="POST">
        <input type="text" name="todo" placeholder="Add a Todo" autoFocus="true"/>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default App;
