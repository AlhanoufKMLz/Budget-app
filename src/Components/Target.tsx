import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { TargetProp, targetSchema } from '../Types/types'

export default function Target(prop: TargetProp) {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<{ target: number }>({ resolver: zodResolver(targetSchema) });

  function onSubmit(data: { target: number }) {
    prop.setUserTarget(data.target)
    reset()
  }

  return (
    <div className='card' >
      <div className="card-header">
        <div className="card-icon goal">🎯</div>
        <div>
          <div className="card-title">Savings Goal</div>
          <div className="card-subtitle">Set and track your target</div>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">Set target </label>
            <input
              type="number"
              className="form-input"
              placeholder="Enter amount..."
              {...register('target', { valueAsNumber: true })}
            /></div>
          {errors.target && <span> {errors.target.message} </span>}
          <div className="btn-row">
            <button className="btn btn-primary">Set Goal</button>
          </div>
        </div>
      </form>

      <div className="savings-stats" style={{ marginTop: '28px' }}>
        <div className="savings-stat">
          <div className="savings-stat-label">Current</div>
          <div className="savings-stat-value">{prop.currentSaving} SAR</div>
        </div>
        <div className="savings-stat">
          <div className="savings-stat-label">Target</div>
          <div className="savings-stat-value">{prop.userTarget} SAR</div>
        </div>
        <div className="savings-stat">
          <div className="savings-stat-label">Remaining</div>
          <div className="savings-stat-value">{Math.max(prop.userTarget - prop.currentSaving, 0).toLocaleString()} SAR</div>
        </div>
      </div>

      <div className="progress-wrapper">
        <div className="progress-header">
          <span className="progress-label">Progress</span>
          <span className="progress-value">{prop.progress.toFixed(2)}%</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${prop.progress}%` }}></div>
        </div>
      </div>

    </div>
  )
}
