import React, { useState } from 'react'
import { BalanceProp } from '../Types/types'
import Swal from 'sweetalert2'

export default function Balance(prop: BalanceProp) {

    const [savingToTransfer, setSavingToTransfer] = useState(0)

    function getsavingToTransfer(event: React.ChangeEvent<HTMLInputElement>){
        setSavingToTransfer(Number(event.target.value))
    }
    function onSubmitHandler(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        if(savingToTransfer > prop.currentBalance){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "You don't have enouph balance",
                confirmButtonText: 'OK',
              })
        } else{
            prop.setCurrentSaving(prop.currentSaving + savingToTransfer)
            prop.setCurrentBalance(prop.currentBalance - savingToTransfer)
            if(prop.userTarget > 0 )
                prop.setProgress(prop.currentSaving / prop.userTarget * 100)
            setSavingToTransfer(0)
        }     
    }
    return (
        <div className='balance container'>
            <p>Current balance: {prop.currentBalance} </p> 
            <form onSubmit={onSubmitHandler}>
                <label>Transfer to saving account <input type='number' value={savingToTransfer} min={0} onChange={getsavingToTransfer}></input><button>Transfer</button></label>
            </form>
        </div>
    )
}
