import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserInput, IncomeProp, schema, Transaction } from '../Types/types'

export default function Income(prop: IncomeProp) {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<UserInput>({ resolver: zodResolver(schema) });

  function onSubmit(data: UserInput) {
    const incomeData: Transaction = {
      ...data,
      type: 'income'
    }

    prop.setTransactionList([...prop.transactionList, incomeData])
    prop.setCurrentBalance(prop.currentBalance + data.amount)
    reset()
  }

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <div className="card-icon income">💵</div>
          <div>
            <div className="card-title">Add Income</div>
            <div className="card-subtitle">Record your earnings</div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label className="form-label">Income Source</label>
            <input
              type="text"
              className="form-input"
              placeholder="e.g., Salary, Freelance..."
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
          <button className="btn btn-success full-width">+ Add Income</button>
        </form>
      </div>

    </div>
  )
}