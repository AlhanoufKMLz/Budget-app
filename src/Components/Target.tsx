import React from 'react'

export default function Target() {
  return (
    <div>
        <form>
            <label>Set target</label> <input type='text'></input>
            <button>Reset</button>
            <p>Current saving: <span>0</span></p>
            <p>Target: <span>0</span></p>
            <label>Progress: <span>0</span>%</label><progress value={0}></progress>
        </form>
    </div>
  )
}
