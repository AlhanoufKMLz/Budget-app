import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserInput, IncomeProp, schema } from '../Types/types'

export default function Income(prop: IncomeProp) {

  const {
    register, 
    handleSubmit,  
    reset,
    formState: { errors }
  } = useForm<UserInput>({resolver: zodResolver(schema)});

  const [incomeList, setIncomeList] = useState<UserInput[]>([])

  function onSubmit(data: UserInput){
      setIncomeList([...incomeList, data])
      prop.setCurrentBalance(prop.currentBalance + data.amount)
      reset()
  }
  function deleteHandler(key: number){
    const newIncomeList = [...incomeList];
    const deleted = newIncomeList.splice(key, 1);
    setIncomeList(newIncomeList);
    prop.setCurrentBalance( prop.currentBalance - deleted[0].amount)
  }

  return (
    <div className='income container'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Income source 
              <input type='text' {...register('source')}/>
            </label>
            {errors.source && <span> {errors.source.message} </span>}

            <label>Amount of Income 
              <input type='number'{...register('amount',{valueAsNumber: true})}/>
            </label>
            {errors.amount && <span> {errors.amount.message} </span>}

            <label>Date of Income 
              <input type='date' {...register('date', {valueAsDate: true})}/>
            </label>
            {errors.date && <span> {errors.date.message} </span>}

            <button>Add income</button>
        </form>
        <div className='list'> 
          <ul>
            <h3>Incomes:</h3>
              {incomeList.map((item, index)=> {
                return( <li key={`income-${index}`}>
                  {item.source}: {item.amount} SAR on {item.date.toDateString()} 
                  <button onClick={()=> deleteHandler(index)}>Delete</button></li>)
                }    
              )}
          </ul>
        </div>
    </div>
  ) 
}