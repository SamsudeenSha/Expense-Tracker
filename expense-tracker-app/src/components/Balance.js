import React, { useContext } from 'react';
import { GlobalContext } from '../context/Globalstate';


export const Balance = () => {

  const {transactions}=useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);
  console.log(amounts)
  const total = amounts.reduce((acc,item) => (acc+=item),0).toFixed(2);
  
  return (
    <div>
        <h3 className='balance'>Your Balance</h3>
        <h3 className='balance'>${total}</h3>

    </div>
  )
}
