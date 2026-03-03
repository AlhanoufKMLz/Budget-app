import { StatusProp } from "../Types/types";

export default function Status(prop: StatusProp) {

    return (
        <div className="stats-grid">
            <div className="stat-card income">
                <div className="stat-icon">📈</div>
                <div className="stat-label">Total Income</div>
                <div className="stat-value">{prop.totalIncome.toLocaleString()} SAR</div>
            </div>
            <div className="stat-card expense">
                <div className="stat-icon">📉</div>
                <div className="stat-label">Total Expenses</div>
                <div className="stat-value">{prop.totalExpense.toLocaleString()} SAR</div>
            </div>
            <div className="stat-card balance">
                <div className="stat-icon">💳</div>
                <div className="stat-label">Available Balance</div>
                <div className="stat-value">{prop.currentBalance.toLocaleString()} SAR</div>
            </div>
            <div className="stat-card savings">
                <div className="stat-icon">🏦</div>
                <div className="stat-label">Total Savings</div>
                <div className="stat-value">{prop.currentSaving.toLocaleString()} SAR</div>
            </div>
        </div>
    )
}
