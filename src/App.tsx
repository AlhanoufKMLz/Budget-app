import React from 'react';
import logo from './logo.svg';
import './App.css';
import Income from './Components/Income';
import Expense from './Components/Expense';
import Target from './Components/Target';

function App() {
  return (
    <div className="App">
      <Income></Income>
      <Expense></Expense>
      <Target></Target>
    </div>
  );
}

export default App;
