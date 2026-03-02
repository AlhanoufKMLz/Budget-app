import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserInput, schema, Transaction, ExpenceProp } from '../Types/types'

export default function Expense(prop: ExpenceProp) {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<UserInput>({ resolver: zodResolver(schema) });

  function onSubmit(data: UserInput) {
    const expenseData: Transaction = {
      ...data,
      type: 'expence'
    }

    prop.setTransactionList([...prop.transactionList, expenseData])
    prop.setTotalExpense(prop.totalExpense + expenseData.amount)
    prop.setCurrentBalance(prop.currentBalance - data.amount)
    reset()
  }

  return (
    <div>
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
