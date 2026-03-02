import React, { useState, useMemo } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Income from './Income';
import Expense from './Expense';
import Target from './Target';
import Balance from './Balance';
import Transactions from './Transactions';
import { Transaction, UserInput } from '../Types/types';

export default function Budget() {

  const [currentSaving, setCurrentSaving] = useState(0)
  const [currentBalance, setCurrentBalance] = useState(0)
  const [userTarget, setUserTarget] = useState(0)
  const [progress, setProgress] = useState(0)
  const [transactionList, setTransactionList] = useState<Transaction[]>([])

  useMemo(() => {
    if (userTarget > 0) {
      setProgress(currentSaving / userTarget * 100)
    } else {
      setProgress(0)
    };
  }, [userTarget, currentSaving]);

  return (
    <div className='container'>
      <header className="header">
        <div className="header-badge">✨ Smart Finance Manager</div>
        <h1>Budget Manager</h1>
        <p>Take control of your finances with ease</p>
      </header>

      {/* Target & Transfer Section */}
      <div className="section-grid">
        <Target
          currentSaving={currentSaving}
          userTarget={userTarget}
          setUserTarget={setUserTarget}
          progress={progress}
          setProgress={setProgress} />
        <Balance
          currentSaving={currentSaving}
          userTarget={userTarget}
          setCurrentSaving={setCurrentSaving}
          currentBalance={currentBalance}
          setCurrentBalance={setCurrentBalance}
          setProgress={setProgress} />
      </div>

      {/* Income & Expense Forms */}
      <div className="section-grid">
        <Income
          currentBalance={currentBalance}
          setCurrentBalance={setCurrentBalance}
          transactionList={transactionList}
          setTransactionList={setTransactionList} />
        <Expense
          currentBalance={currentBalance}
          setCurrentBalance={setCurrentBalance}
          transactionList={transactionList}
          setTransactionList={setTransactionList} />
      </div>

      {/* Transactions List */}
      <Transactions
        currentBalance={currentBalance}
        setCurrentBalance={setCurrentBalance}
        transactionList={transactionList}
        setTransactionList={setTransactionList} />


    </div>
  )
}
