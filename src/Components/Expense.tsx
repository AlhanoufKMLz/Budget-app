import React, {useState} from 'react'
import { UserInput, ExpenceProp } from '../Types/types'


export default function Expense(prop: ExpenceProp) {

  const [expenceList, setExpenceList] = useState<UserInput[]>([])
  const [userInput, setUserInput] = useState({source: '', amount: 0, date: new Date()})

  function getExpenceSource(event: React.ChangeEvent<HTMLInputElement>){
      setUserInput({...userInput, source: event.target.value})
  }
  function getExpenceAmount(event: React.ChangeEvent<HTMLInputElement>){
      setUserInput({...userInput, amount: Number(event.target.value)})
  }
  function getExpenceDate(event: React.ChangeEvent<HTMLInputElement>){
    setUserInput({...userInput, date: new Date(event.target.value)})
  }
  function onSubmitHandler(event: React.FormEvent<HTMLFormElement>){
      event.preventDefault();
      setExpenceList([...expenceList, userInput])
      setUserInput({source: '', amount: 0, date: new Date()})
      prop.setCurrentBalance(prop.currentBalance - userInput.amount)
  }

  return (
    <div className='expence container'>
        <form onSubmit={onSubmitHandler}>
            <label>Expence source <input type='text' value={userInput.source} onChange={getExpenceSource}></input></label>
            <label>Amount of expence <input type='number' value={userInput.amount} min={0} onChange={getExpenceAmount}></input></label>
            <label>Date of expence <input type='date' onChange={getExpenceDate}></input></label>
            <button>Add expence</button>
        </form>
        <div className='list'>
          <ul>
            <h3>Expences:</h3>
            {expenceList.map((item)=> {
              return(<li>{item.source}: {item.amount} SAR on {item.date.toDateString()} </li>)
            }    
            )}
          </ul>
        </div>
    </div>
  )
}
