import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { BalanceProp, balanceSchema } from '../Types/types'

export default function Balance(prop: BalanceProp) {

    const {
        register, 
        handleSubmit, 
        reset,
        formState: { errors } 
      } = useForm<{saving: number}>({resolver: zodResolver(balanceSchema)});
    
    function onSubmit(data: {saving: number}){
        prop.setCurrentSaving(prop.currentSaving + data.saving)
        prop.setCurrentBalance(prop.currentBalance - data.saving)
        reset()   
    }
    return (
        <div className='balance container'>
            <p>Current balance: {prop.currentBalance}</p> 
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="transfer">
                    <label>Transfer to saving account <input type='number' {...register('saving',{valueAsNumber: true})}></input></label>
                    <button>Transfer</button>
                </div>  
                {errors.saving && <span> {errors.saving.message} </span>}
            </form>
        </div>
    )
}
