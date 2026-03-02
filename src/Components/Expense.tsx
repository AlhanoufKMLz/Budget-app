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
  } = useForm<UserInput>({ resolver: zodResolver(schema) });

  const [expenceList, setExpenceList] = useState<UserInput[]>([])

  function onSubmit(data: UserInput) {
    setExpenceList([...expenceList, data])
    prop.setCurrentBalance(prop.currentBalance - data.amount)
    reset()
  }
  function deleteHandler(key: number) {
    const newExpenceList = [...expenceList];
    const deleted = newExpenceList.splice(key, 1);
    setExpenceList(newExpenceList);
    prop.setCurrentBalance(prop.currentBalance + deleted[0].amount)
  }

  return (
    <div>

      <div className='list'>
        <ul>
          <h3>Expences:</h3>
          {expenceList.map((item, index) => {
            return (<li key={`income-${index}`}>
              {item.source}: {item.amount} SAR on {item.date.toDateString()}
              <button onClick={() => deleteHandler(index)}>Delete</button></li>)
          }
          )}
        </ul>
      </div>

      <div className="card">
        <div className="card-header">
          <div className="card-icon expense">🛒</div>
          <div>
            <div className="card-title">Add Expense</div>
            <div className="card-subtitle">Track your spending</div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label className="form-label">Expence Source</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g., Rent, Groceries..."
              {...register('source')}
            />
            {errors.source && <span> {errors.source.message} </span>}
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Amount</label>
              <input
                type="number"
                className="form-input"
                placeholder="0.00"
                {...register('amount', { valueAsNumber: true })}
              />
              {errors.amount && <span> {errors.amount.message} </span>}
            </div>
            <div className="form-group">
              <label className="form-label">Date</label>
              <input
                type="date"
                className="form-input"
                {...register('date', { valueAsDate: true })}
              />
              {errors.date && <span> {errors.date.message} </span>}
            </div>
          </div>
          <button className="btn btn-danger full-width">+ Add Expence</button>
        </form>
      </div>
    </div>
  )
}
