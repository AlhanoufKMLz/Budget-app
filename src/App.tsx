import React from 'react';
import './App.css';
import Budget from './Components/Budget';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Budget/>
      <Routes>
        <Route path='/budget-app' element={<Budget/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
