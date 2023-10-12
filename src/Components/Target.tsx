import React, {useState} from 'react'

export default function Target() {

  const [userInput, setUserInput] = useState({target: 0, current: 0, progress: 0})
  const [userTarget, setUserTarget] = useState({target: 0, current: 0, progress: 0})
  const [currentSaving, setCurrentSaving] = useState(0)

  function getTarget(event: React.ChangeEvent<HTMLInputElement>){
    setUserInput({...userInput, target: Number(event.target.value)})
  }
  function onSubmitHandler(event: React.FormEvent<HTMLFormElement>){
      event.preventDefault();
      setUserTarget({...userTarget, target: userInput.target})
      setUserInput({...userTarget, target: 0})
  }

  return (
    <div className='target container' >
        <form onSubmit={onSubmitHandler}>
            <label>Set target <input type='number' value={userInput.target} onChange={getTarget}></input><button>Reset</button></label>
        </form> 
        <p>Current saving: {currentSaving} </p>
        <p>Target: {userTarget.target} </p>
        <p>Progress: 0% <progress value={0}></progress></p>
    </div>
  )
}
