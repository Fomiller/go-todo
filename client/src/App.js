import React from 'react';
import './App.css';
import {AppProvider} from './utils/globalContext';
import Home from './pages/home';

function App() {
  // establish state
  // const [todos, setTodos] = useState([])

  // // load todos when App component renders
  // useEffect( () => {
  //   loadTodos()
  // },[])

  // // function handling loading todos
  // function loadTodos() {
  //   API.getTodos()
  //   .then(res => {
  //     setTodos(res.data);
  //   })
  //   .catch(err => console.log(err));
  // }
  return (
    <AppProvider>
      <Home/>
    </AppProvider>
  );
}

export default App;
