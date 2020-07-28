import React from 'react';
import './App.css';
import {AppProvider} from './utils/globalContext';
import Home from './pages/home';

function App() {
  return (
    <AppProvider>
      <Home/>
    </AppProvider>
  );
}

export default App;
