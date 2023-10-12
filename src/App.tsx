import React from 'react';
import logo from './logo.svg';
import './App.css';
import Income from './Components/Income';
import Expense from './Components/Expense';
import Target from './Components/Target';
import Balance from './Components/Balance';

function App() {

  return (
    <div className="App">
      <h1>My Budget</h1>
      <Income/>
      <Expense/>
      <Target/>  
      <Balance/>   
    </div>
  );
}

export default App;
