import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { UserInput, schema, TransactionProp } from '../Types/types'

export default function Transactions(prop: TransactionProp) {

    const {
        formState: { errors }
    } = useForm<UserInput>({ resolver: zodResolver(schema) });

    const deleteHandler = (key: number) => {
        const newList = [...prop.transactionList];
        const deleted = newList.splice(key, 1);
        prop.setTransactionList(newList);
        if (deleted[0].type == 'income')
            prop.setCurrentBalance(prop.currentBalance - deleted[0].amount)
        else
            prop.setCurrentBalance(prop.currentBalance + deleted[0].amount)
    };

    return (
        <div className="card transactions-card">
            <div className="transactions-header">
                <div className="card-header" style={{ marginBottom: 0 }}>
                    <div className="card-icon goal">📋</div>
                    <div>
                        <div className="card-title">Transaction History</div>
                        <div className="card-subtitle">{prop.transactionList.length} transactions</div>
                    </div>
                </div>
            </div>


            {prop.transactionList.length === 0 ? (
                <div className="empty-state">
                    <div className="empty-icon">📭</div>
                    <p>No transactions yet. Add your first income or expense above.</p>
                </div>
            ) : (
                <div className="transactions-list">
                    {prop.transactionList.slice().reverse().map((t, index) => (
                        <div key={`income-${index}`} className="transaction-item">
                            <div className="transaction-info">
                                <div className={`transaction-icon ${t.type}`}>
                                    {t.type === 'income' ? '💵' : '🛒'}
                                </div>
                                <div className="transaction-details">
                                    <h4>{t.source}</h4>
                                    <span>{t.date.toLocaleDateString()}</span>
                                </div>
                            </div>

                            <div className="transaction-amount">
                                <span className={t.type}>
                                    {t.type === 'income' ? '+' : '-'}${t.amount.toLocaleString()}
                                </span>
                                <button className="btn-delete" onClick={() => deleteHandler(index)}>
                                    ✕
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>

    )
}