import React, {useState} from 'react';
import './App.css';
import Income from './Components/Income';
import Expense from './Components/Expense';
import Target from './Components/Target';
import Balance from './Components/Balance';

function App() {
  const [currentSaving, setCurrentSaving] = useState(0)
  const [currentBalance, setCurrentBalance] = useState(0)
  const [userTarget, setUserTarget] = useState(0)
  const [progress, setProgress] = useState(0)

  return (
    <div className="App">
      <h1>My Budget</h1>
      <Income currentBalance = {currentBalance} setCurrentBalance = {setCurrentBalance}/>
      <Expense currentBalance = {currentBalance} setCurrentBalance = {setCurrentBalance}/>
      <Target currentSaving = {currentSaving} userTarget = {userTarget} setUserTarget = {setUserTarget} progress = {progress} setProgress = {setProgress}/>  
      <Balance currentSaving = {currentSaving} userTarget = {userTarget} setCurrentSaving = {setCurrentSaving} currentBalance = {currentBalance} setCurrentBalance = {setCurrentBalance} setProgress = {setProgress}/>   
    </div>
  );
}

export default App;
