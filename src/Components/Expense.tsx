import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserInput, ExpenceProp, schema } from '../Types/types'

export default function Expense(prop: ExpenceProp) {

  const {
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<UserInput>({resolver: zodResolver(schema)});

  const [expenceList, setExpenceList] = useState<UserInput[]>([])

  function onSubmit(data: UserInput){
      setExpenceList([...expenceList, data])
      prop.setCurrentBalance(prop.currentBalance - data.amount)
      reset()
  }
  function deleteHandler(key: number){
    const newExpenceList = [...expenceList];
    const deleted = newExpenceList.splice(key, 1);
    setExpenceList(newExpenceList);
    prop.setCurrentBalance( prop.currentBalance + deleted[0].amount)
  }

  return (
    <div className='expence container'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Expence source 
              <input type='text' {...register('source')}/>
            </label>
            {errors.source && <span> {errors.source.message} </span>}

            <label>Amount of expence 
              <input type='number'{...register('amount',{valueAsNumber: true})}/>
            </label>
            {errors.amount && <span> {errors.amount.message} </span>}

            <label>Date of expence 
              <input type='date' {...register('date', {valueAsDate: true})}/>
            </label>
            {errors.date && <span> {errors.date.message} </span>}

            <button>Add expence</button>
        </form>
        <div className='list'>
          <ul>
            <h3>Expences:</h3>
              {expenceList.map((item, index)=> {
                return( <li key={`income-${index}`}>
                  {item.source}: {item.amount} SAR on {item.date.toDateString()}
                  <button onClick={() => deleteHandler(index)}>Delete</button></li>)
                }    
              )}
          </ul>
        </div>
    </div>
  )
}
