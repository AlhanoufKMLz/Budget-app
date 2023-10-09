import React from 'react'

export default function Expense() {
  return (
    <div>
        <form>
            <label>Expence source</label> <input type='text'></input>
            <label>Amount of expence</label> <input type='number'></input>
            <label>Date of expence</label> <input type='date'></input>
            <button>Add expence</button>
        </form>
    </div>
  )
}
