import React, {useState} from 'react'

export default function Income() {

  const [userInput, setUserInput] = useState({source: '', amount: 0, date: new Date()})
  const [incomeList, setIncomeList] = useState<{source: string, amount: number, date: Date}[]>([])

  function getIncomeSource(event: React.ChangeEvent<HTMLInputElement>){
      setUserInput({...userInput, source: event.target.value})
  }
  function getIncomeAmount(event: React.ChangeEvent<HTMLInputElement>){
      setUserInput({...userInput, amount: Number(event.target.value)})
  }
  function getIncomeDate(event: React.ChangeEvent<HTMLInputElement>){
    setUserInput({...userInput, date: new Date(event.target.value)})
  }
  function onSubmitHandler(event: React.FormEvent<HTMLFormElement>){
      event.preventDefault();
      setIncomeList([...incomeList, userInput])
      setUserInput({source: '', amount: 0, date: new Date()})
  }

  return (
    <div className='income container'>
        <form onSubmit={onSubmitHandler}>
            <label>Income source <input type='text'  value={userInput.source} onChange={getIncomeSource}></input></label>
            <label>Amount of income <input type='number' value={userInput.amount} onChange={getIncomeAmount}></input></label>
            <label>Date of income <input type='date' onChange={getIncomeDate}></input></label>
            <button>Add income</button>
        </form>
        <div className='list'> 
          <ul>
            <h3>Incomes:</h3>
              {incomeList.map((item)=> {
                return( <li>{item.source}: {item.amount} SAR on {item.date.toDateString()}</li>)
              }    
              )}
          </ul>
        </div>
    </div>
  )
}
