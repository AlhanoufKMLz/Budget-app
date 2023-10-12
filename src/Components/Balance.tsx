import React, {useState} from 'react'

export default function Balance() {

    const [currentBalance, setCurrentBalance] = useState(0)

    return (
        <div className='balance container'>
            <p>Current balance: {currentBalance} </p> 
            <form>
                <label>Transfer to saving account <input type='number'></input><button>Transfer</button></label>
            </form>
        </div>
    )
}
