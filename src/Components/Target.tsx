import React, {useState} from 'react'
import { TargetProp } from '../Types/types'

export default function Target(prop: TargetProp) {

  const [userInput, setUserInput] = useState(0)

  function getTarget(event: React.ChangeEvent<HTMLInputElement>){
    setUserInput(Number(event.target.value))
  }
  function onSubmitHandler(event: React.FormEvent<HTMLFormElement>){
      event.preventDefault();
      prop.setUserTarget(userInput)
      prop.setProgress(prop.currentSaving / prop.userTarget * 100)
      setUserInput(0)
  }

  return (
    <div className='target container' >
        <form onSubmit={onSubmitHandler}>
            <label>Set target <input type='number' value={userInput} onChange={getTarget}></input><button>Reset</button></label>
        </form> 
        <p>Current saving: {prop.currentSaving} </p>
        <p>Target: {prop.userTarget} </p>
        <p>Progress: {prop.progress}% <progress value={prop.currentSaving} max={prop.userTarget}></progress></p>
    </div>
  )
}
