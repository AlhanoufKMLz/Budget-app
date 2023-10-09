import React from 'react'

export default function Income() {
  return (
    <div>
        <form>
            <label>Income source</label> <input type='text'></input>
            <label>Amount of income</label> <input type='number'></input>
            <label>Date of income</label> <input type='date'></input>
            <button>Add income</button>
        </form>
    </div>
  )
}
