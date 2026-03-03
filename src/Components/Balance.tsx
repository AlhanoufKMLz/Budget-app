import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { BalanceProp, balanceSchema } from '../Types/types'

export default function Balance(prop: BalanceProp) {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<{ saving: number }>({ resolver: zodResolver(balanceSchema) });

    function onSubmit(data: { saving: number }) {
        prop.setCurrentSaving(prop.currentSaving + data.saving)
        prop.setCurrentBalance(prop.currentBalance - data.saving)
        reset()
    }
    return (
        <div className='card'>
            <div className="card-header">
                <div className="card-icon transfer">💰</div>
                <div>
                    <div className="card-title">Transfer to Savings</div>
                    <div className="card-subtitle">Move money to your savings</div>
                </div>
            </div>
            <div className="balance-display">
                <span className="balance-label">Available to Transfer</span>
                <span className="balance-value">{prop.currentBalance} SAR</span>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label className="form-label">Amount</label>
                    <input
                        type="number"
                        className="form-input"
                        placeholder="Enter amount..."
                        {...register('saving', { valueAsNumber: true })}
                    />
                </div>
                {errors.saving && <span> {errors.saving.message} </span>}
                <div className="btn-row" style={{ marginTop: '16px' }}>
                    <button className="btn btn-success full-width">
                        ↑ Transfer to Savings
                    </button>
                </div>
            </form>
        </div>
    )
}
