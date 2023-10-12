import React, {useState} from 'react'

export default function Expense() {

  const [userInput, setUserInput] = useState({source: '', amount: 0, date: new Date()})
  const [expenceList, setExpenceList] = useState<{source: string, amount: number, date: Date}[]>([])

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
  }

  return (
    <div className='expence container'>
        <form onSubmit={onSubmitHandler}>
            <label>Expence source <input type='text' value={userInput.source} onChange={getExpenceSource}></input></label>
            <label>Amount of expence <input type='number' value={userInput.amount}  onChange={getExpenceAmount}></input></label>
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
