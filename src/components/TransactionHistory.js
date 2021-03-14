import React, { useContext } from 'react'

// Import Transaction Component
    import { Transaction } from './Transaction'

// Import the Global State
import { GlobalContext } from '../context/GlobalState';

export const TransactionHistory = () => {

    const { transactions } = useContext(GlobalContext);

    console.log(transactions);

    return (
        <div>
            <h3>Transaction History</h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id}  transaction={transaction} />
                
                    ))}
            </ul>
            
            
            
            
            
            
            
            
            
            {/* <ul className="list">
                <li className="plus">
                    Project Income Deliverable 1
                    <span>$10,000</span>
                    <button className="delete-btn">X</button>
                </li>
                <li className="minus">
                    Salary Payment
                    <span>-$1000</span>
                    <button className="delete-btn">X</button>
                </li>
            </ul> */}
        </div>
    )
}
