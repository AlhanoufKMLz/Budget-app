import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { TargetProp, targetSchema } from '../Types/types'

export default function Target(prop: TargetProp) {

  const {
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<{target: number}>({resolver: zodResolver(targetSchema)});

  function onSubmit(data: {target: number}){
      prop.setUserTarget(data.target)
      reset()
  }

  return (
    <div className='target container' >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='transfer'>
            <label>Set target <input type='number' {...register('target',{valueAsNumber: true})}></input></label>
            <button>Reset</button>
          </div>
          {errors.target && <span> {errors.target.message} </span>}
        </form> 
        <p>Current saving: {prop.currentSaving} </p>
        <p>Target: {prop.userTarget} </p>
        <p>Progress: {prop.progress}% <progress value={prop.currentSaving} max={prop.userTarget}></progress></p>
    </div>
  )
}
