import React, {useState} from 'react'

export default function Balance() {

    const [currentBalance, setCurrentBalance] = useState(0)

    return (
        <div className='balance container'>
            <form>
                <label>Current balance: {currentBalance} </label>  
                <label>Transfer to saving account <input type='number'></input><button>Transfer</button></label>
            </form>
        </div>
    )
}
